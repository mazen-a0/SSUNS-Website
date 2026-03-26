"use client";

import { useCallback, useEffect, useMemo, useRef, type PointerEvent as ReactPointerEvent } from "react";
import createGlobe, { type Globe as CobeGlobeInstance, type Marker as CobeMarker, type Arc as CobeArc } from "cobe";
import { cn } from "@/lib/cn";

export interface GlobeMarker {
  id: string;
  location: [number, number];
  label: string;
}

export interface GlobeArc {
  id: string;
  from: [number, number];
  to: [number, number];
  label?: string;
}

export interface CobeGlobeProps {
  markers?: GlobeMarker[];
  arcs?: GlobeArc[];
  className?: string;
  markerColor?: [number, number, number];
  baseColor?: [number, number, number];
  arcColor?: [number, number, number];
  glowColor?: [number, number, number];
  dark?: number;
  mapBrightness?: number;
  markerSize?: number;
  markerElevation?: number;
  arcWidth?: number;
  arcHeight?: number;
  speed?: number;
  theta?: number;
  diffuse?: number;
  mapSamples?: number;
}

const defaultMarkerColor: [number, number, number] = [0.298, 0.62, 1];
const defaultBaseColor: [number, number, number] = [0.94, 0.96, 0.99];
const defaultArcColor: [number, number, number] = [0.298, 0.62, 1];
const defaultGlowColor: [number, number, number] = [0.08, 0.125, 0.51];

export function CobeGlobe({
  markers = [],
  arcs = [],
  className,
  markerColor = defaultMarkerColor,
  baseColor = defaultBaseColor,
  arcColor = defaultArcColor,
  glowColor = defaultGlowColor,
  dark = 0.18,
  mapBrightness = 2.8,
  markerSize = 0.085,
  markerElevation = 0.03,
  arcWidth = 0.7,
  arcHeight = 0.16,
  speed = 0.0032,
  theta = 0.28,
  diffuse = 1.35,
  mapSamples = 20000,
}: CobeGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointerInteracting = useRef<{ x: number; y: number } | null>(null);
  const lastPointer = useRef<{ x: number; y: number; t: number } | null>(null);
  const dragOffset = useRef({ phi: 0, theta: 0 });
  const velocity = useRef({ phi: 0, theta: 0 });
  const phiOffsetRef = useRef(0);
  const thetaOffsetRef = useRef(0);
  const isPausedRef = useRef(false);
  const reduceMotionRef = useRef(false);

  const cobeMarkers = useMemo<CobeMarker[]>(() => {
    return markers.map((marker) => ({
      id: marker.id,
      location: marker.location,
      size: markerSize,
    }));
  }, [markers, markerSize]);

  const cobeArcs = useMemo<CobeArc[]>(() => {
    return arcs.map((arc) => ({
      id: arc.id,
      from: arc.from,
      to: arc.to,
    }));
  }, [arcs]);

  const handlePointerDown = useCallback((event: ReactPointerEvent<HTMLCanvasElement>) => {
    pointerInteracting.current = { x: event.clientX, y: event.clientY };
    lastPointer.current = { x: event.clientX, y: event.clientY, t: Date.now() };
    if (canvasRef.current) {
      canvasRef.current.style.cursor = "grabbing";
    }
    isPausedRef.current = true;
  }, []);

  const handlePointerMove = useCallback((event: PointerEvent) => {
    if (!pointerInteracting.current) {
      return;
    }

    const deltaX = event.clientX - pointerInteracting.current.x;
    const deltaY = event.clientY - pointerInteracting.current.y;
    dragOffset.current = { phi: deltaX / 320, theta: deltaY / 1100 };

    const now = Date.now();
    if (lastPointer.current) {
      const dt = Math.max(now - lastPointer.current.t, 1);
      const maxVelocity = 0.12;
      velocity.current = {
        phi: Math.max(-maxVelocity, Math.min(maxVelocity, ((event.clientX - lastPointer.current.x) / dt) * 0.26)),
        theta: Math.max(-maxVelocity, Math.min(maxVelocity, ((event.clientY - lastPointer.current.y) / dt) * 0.06)),
      };
    }

    lastPointer.current = { x: event.clientX, y: event.clientY, t: now };
  }, []);

  const handlePointerUp = useCallback(() => {
    if (pointerInteracting.current) {
      phiOffsetRef.current += dragOffset.current.phi;
      thetaOffsetRef.current += dragOffset.current.theta;
      dragOffset.current = { phi: 0, theta: 0 };
      lastPointer.current = null;
    }

    pointerInteracting.current = null;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = "grab";
    }
    isPausedRef.current = false;
  }, []);

  useEffect(() => {
    reduceMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [handlePointerMove, handlePointerUp]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    let globe: CobeGlobeInstance | null = null;
    let animationFrame = 0;
    let resizeObserver: ResizeObserver | null = null;
    let phi = 0;

    const init = () => {
      const width = canvas.offsetWidth;
      if (!width || globe) {
        return;
      }

      globe = createGlobe(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width,
        height: width,
        phi: 0,
        theta,
        dark,
        diffuse,
        mapSamples,
        mapBrightness,
        baseColor,
        markerColor,
        glowColor,
        markerElevation,
        markers: cobeMarkers,
        arcs: cobeArcs,
        arcColor,
        arcWidth,
        arcHeight,
        opacity: 1,
      });

      const animate = () => {
        if (!globe) {
          return;
        }

        if (!isPausedRef.current && !reduceMotionRef.current) {
          phi += speed;
          if (Math.abs(velocity.current.phi) > 0.0001 || Math.abs(velocity.current.theta) > 0.0001) {
            phiOffsetRef.current += velocity.current.phi;
            thetaOffsetRef.current += velocity.current.theta;
            velocity.current.phi *= 0.95;
            velocity.current.theta *= 0.95;
          }

          const thetaMin = -0.35;
          const thetaMax = 0.35;
          if (thetaOffsetRef.current < thetaMin) {
            thetaOffsetRef.current += (thetaMin - thetaOffsetRef.current) * 0.1;
          } else if (thetaOffsetRef.current > thetaMax) {
            thetaOffsetRef.current += (thetaMax - thetaOffsetRef.current) * 0.1;
          }
        }

        globe.update({
          phi: phi + phiOffsetRef.current + dragOffset.current.phi,
          theta: theta + thetaOffsetRef.current + dragOffset.current.theta,
          dark,
          diffuse,
          mapBrightness,
          baseColor,
          markerColor,
          glowColor,
          markerElevation,
          markers: cobeMarkers,
          arcs: cobeArcs,
          arcColor,
          arcWidth,
          arcHeight,
        });

        animationFrame = window.requestAnimationFrame(animate);
      };

      canvas.style.opacity = "1";
      animate();
    };

    if (canvas.offsetWidth > 0) {
      init();
    } else {
      resizeObserver = new ResizeObserver((entries) => {
        if (entries[0]?.contentRect.width) {
          resizeObserver?.disconnect();
          init();
        }
      });
      resizeObserver.observe(canvas);
    }

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver?.disconnect();
      globe?.destroy();
    };
  }, [arcColor, arcHeight, arcWidth, baseColor, cobeArcs, cobeMarkers, dark, diffuse, glowColor, mapBrightness, mapSamples, markerColor, markerElevation, speed, theta]);

  return (
    <div className={cn("relative mx-auto aspect-square w-full max-w-[34rem] select-none", className)}>
      <div className="absolute inset-3 rounded-full border border-[var(--rule)] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.85),rgba(255,255,255,0))]" />
      <canvas
        ref={canvasRef}
        aria-label="Illustrative globe showing delegation locations"
        className="relative z-10 h-full w-full rounded-full opacity-0 transition-opacity duration-700"
        onPointerDown={handlePointerDown}
        style={{ cursor: "grab", touchAction: "none" }}
      />
    </div>
  );
}
