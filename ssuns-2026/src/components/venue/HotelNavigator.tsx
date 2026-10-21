"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Minus, Plus, Maximize2, MapPin } from "lucide-react";
import type { Committee } from "@/content/en/committees";
import { hotelLevels, venueFloorPlanPdfUrl, venueRooms, type HotelLevel, type VenueRoom } from "@/content/venueRooms";
import styles from "./HotelNavigator.module.css";

type Props = { committees: Committee[]; initialRoomId?: string; language?: "en" | "fr" };

export function HotelNavigator({ committees, initialRoomId, language = "en" }: Props) {
  const fr = language === "fr";
  const levelLabel = fr ? "Niveau" : "Level";
  const initialRoom = venueRooms.find((item) => item.id === initialRoomId);
  const [floor, setFloor] = useState<HotelLevel>(initialRoom?.floor ?? "B");
  const [roomId, setRoomId] = useState<string | null>(initialRoom?.id ?? null);
  const [query, setQuery] = useState("");
  const [zoom, setZoom] = useState(initialRoom ? 2 : 1);
  const viewport = useRef<HTMLDivElement>(null);
  const mapSection = useRef<HTMLDivElement>(null);
  const room = venueRooms.find((item) => item.id === roomId && item.floor === floor);

  function label(item: VenueRoom) {
    const name = committees.find((committee) => committee.slug === item.committeeSlug)?.name ?? item.tableLabel;
    return `${name}${item.side ? ` · ${item.side}` : ""}`;
  }
  const results = venueRooms.filter((item) => query.trim()
    ? `${label(item)} ${item.tableLabel} ${item.room}`.toLowerCase().includes(query.trim().toLowerCase())
    : item.floor === floor);

  useEffect(() => {
    const element = viewport.current;
    if (!element) return;
    const x = room ? room.bounds[0] + room.bounds[2] / 2 : 50;
    const y = room ? room.bounds[1] + room.bounds[3] / 2 : 50;
    element.scrollTo({
      left: element.scrollWidth * x / 100 - element.clientWidth / 2,
      top: element.scrollHeight * y / 100 - element.clientHeight / 2,
      behavior: "instant",
    });
  }, [zoom, room, query]);

  function chooseRoom(item: VenueRoom) {
    setRoomId(item.id);
    setFloor(item.floor);
    setQuery("");
    setZoom(2);
    requestAnimationFrame(() => mapSection.current?.scrollIntoView({ block: "start", behavior: "instant" }));
  }

  return <div className={styles.navigator} lang={language}>
    <p className={styles.eyebrow}>LE CENTRE SHERATON MONTRÉAL</p>
    <h2 className={styles.title}>{fr ? "Plan de l’hôtel" : "Hotel map"}</h2>
    <label className={styles.search}>{fr ? "Comité ou salle" : "Committee or room"}
      <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={fr ? "Ex. ICAO, Ballroom, 716" : "e.g. ICAO, Ballroom, 716"} />
    </label>
    {!query.trim() && <>
      <div className={styles.floorTabs} aria-label={fr ? "Étage de l’hôtel" : "Hotel level"}>
        {hotelLevels.map((level) => <button key={level} aria-pressed={floor === level} onClick={() => {
          setFloor(level); setRoomId(null); setQuery(""); setZoom(1);
        }}><span>{levelLabel}</span>{level}</button>)}
      </div>
      <div ref={mapSection} className={styles.mapSection}>
        <div className={styles.mapHeading} aria-live="polite">
          <MapPin size={20} aria-hidden="true" />
          <div>
            <h3>{room ? `${room.room} · ${levelLabel} ${room.floor}` : `${levelLabel} ${floor}`}</h3>
            <p>{room ? label(room) : fr ? "Sélectionnez une salle sur le plan pour voir son comité." : "Select a room on the plan to see its committee."}</p>
          </div>
        </div>
        <div className={styles.mapViewport} ref={viewport} tabIndex={0} role="region" aria-label={fr
          ? `Plan du niveau ${floor}. ${room ? `${room.room} en surbrillance. ` : ""}Agrandissez le plan, puis faites défiler pour vous déplacer.`
          : `Level ${floor} floor plan. ${room ? `${room.room} highlighted. ` : ""}Use zoom buttons to enlarge, then scroll to pan.`}>
          <div className={styles.mapCanvas} style={{ width: `${zoom * 100}%` }}>
            <Image src={`/maps/sheraton/level-${floor.toLowerCase()}.webp`} alt={fr
              ? `Plan du niveau ${floor} de l’hôtel. Les salles et les ascenseurs sont indiqués sur le plan d’origine.`
              : `Hotel floor plan, Level ${floor}. Room names and elevators are marked on the original plan.`}
              width={1800} height={1391} sizes="(min-width: 740px) 900px, 100vw" unoptimized />
            <div className={styles.mapOverlay} role="group" aria-label={fr ? `Salles des comités au niveau ${floor}` : `Committee rooms on Level ${floor}`}>
              {venueRooms.filter((item) => item.floor === floor).map((item) => <button
                key={item.id} className={styles.mapRoom}
                style={{ left: `${item.bounds[0]}%`, top: `${item.bounds[1]}%`, width: `${item.bounds[2]}%`, height: `${item.bounds[3]}%` }}
                aria-label={`${item.room}: ${label(item)}`} aria-pressed={roomId === item.id}
                title={`${item.room} · ${label(item)}`} onClick={() => setRoomId(item.id)}
              ><strong>{item.room}</strong><span>{label(item)}</span></button>)}
            </div>
          </div>
        </div>
        <div className={styles.mapControls}>
          <p>{room
            ? fr ? "Contour bleu : salle sélectionnée · Sélectionnez une autre salle pour explorer" : "Blue outline: selected room · Tap any room to explore"
            : fr ? "Sélectionnez une salle pour voir son comité" : "Tap a labelled room to see its committee"}</p>
          <div>
            <button aria-label={fr ? "Réduire le zoom" : "Zoom out"} disabled={zoom === 1} onClick={() => setZoom((value) => Math.max(1, value - 1))}><Minus aria-hidden="true" size={17} /></button>
            <span aria-live="polite">{zoom}×</span>
            <button aria-label={fr ? "Agrandir le plan" : "Zoom in"} disabled={zoom === 4} onClick={() => setZoom((value) => Math.min(4, value + 1))}><Plus aria-hidden="true" size={17} /></button>
            <button aria-label={fr ? "Adapter le plan à la largeur" : "Fit map to width"} disabled={zoom === 1} onClick={() => setZoom(1)}><Maximize2 aria-hidden="true" size={16} /></button>
          </div>
        </div>
      </div>
    </>}
    <div className={styles.roomList} aria-label={query ? fr ? "Résultats de recherche" : "Search results" : `${fr ? "Salles ·" : "Rooms on"} ${levelLabel} ${floor}`}>
      {results.length === 0 && <p>{fr ? "Aucune salle ne correspond à" : "No rooms match"} “{query}”.</p>}
      {results.map((item) => <button key={item.id} aria-pressed={roomId === item.id} onClick={() => chooseRoom(item)}>
        <span><strong>{item.room}</strong><small>{label(item)}</small></span>
        <span>{levelLabel} {item.floor} <span aria-hidden="true">↗</span></span>
      </button>)}
    </div>
    <a className={styles.resource} href={venueFloorPlanPdfUrl} target="_blank" rel="noopener noreferrer">{fr ? "Ouvrir les plans annotés (PDF)" : "Open annotated floor plans (PDF)"} ↗</a>
  </div>;
}
