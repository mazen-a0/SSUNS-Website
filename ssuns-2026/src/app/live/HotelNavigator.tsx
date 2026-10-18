"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Minus, Plus, Maximize2, MapPin } from "lucide-react";
import type { Committee } from "@/content/en/committees";
import { hotelLevels, venueRooms, type HotelLevel, type VenueRoom } from "@/content/venueRooms";
import styles from "./live.module.css";

type Props = { committees: Committee[]; initialRoomId?: string };

export function HotelNavigator({ committees, initialRoomId }: Props) {
  const initialRoom = venueRooms.find((item) => item.id === initialRoomId);
  const [floor, setFloor] = useState<HotelLevel>(initialRoom?.floor ?? "B");
  const [roomId, setRoomId] = useState<string | null>(initialRoom?.id ?? null);
  const [query, setQuery] = useState("");
  const [zoom, setZoom] = useState(initialRoom ? 2 : 1);
  const viewport = useRef<HTMLDivElement>(null);
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
    requestAnimationFrame(() => document.getElementById("hotel-map")?.scrollIntoView({ block: "start", behavior: "instant" }));
  }

  return <>
    <p className={styles.eyebrow}>LE CENTRE SHERATON MONTRÉAL</p>
    <h2>Hotel map</h2>
    <label className={styles.search}>Committee or room
      <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="e.g. ICAO, Ballroom, 716" />
    </label>
    {!query.trim() && <><div className={styles.floorTabs} aria-label="Hotel level">
      {hotelLevels.map((level) => <button key={level} aria-pressed={floor === level} onClick={() => { setFloor(level); setRoomId(null); setQuery(""); setZoom(1); }}><span>Level</span>{level}</button>)}
    </div>
    <div id="hotel-map" className={styles.mapSection}>
      <div className={styles.mapHeading} aria-live="polite">
        <MapPin size={20} aria-hidden="true" />
        <div><h3>{room ? `${room.room} · Level ${room.floor}` : `Level ${floor}`}</h3><p>{room ? label(room) : "Select a room on the plan to see its committee."}</p></div>
      </div>
      <div className={styles.mapViewport} ref={viewport} tabIndex={0} role="region" aria-label={`Level ${floor} floor plan. ${room ? `${room.room} highlighted. ` : ""}Use zoom buttons to enlarge, then scroll to pan.`}>
        <div className={styles.mapCanvas} style={{ width: `${zoom * 100}%` }}>
          <Image src={`/maps/sheraton/level-${floor.toLowerCase()}.webp`} alt={`Hotel floor plan, Level ${floor}. Room names and elevators are marked on the original plan.`} width={1800} height={1391} sizes="(min-width: 740px) 700px, 100vw" unoptimized />
          <div className={styles.mapOverlay} role="group" aria-label={`Committee rooms on Level ${floor}`}>
            {venueRooms.filter((item) => item.floor === floor).map((item) => <button
              key={item.id}
              className={styles.mapRoom}
              style={{ left: `${item.bounds[0]}%`, top: `${item.bounds[1]}%`, width: `${item.bounds[2]}%`, height: `${item.bounds[3]}%` }}
              aria-label={`${item.room}: ${label(item)}`}
              aria-pressed={roomId === item.id}
              title={`${item.room} · ${label(item)}`}
              onClick={() => setRoomId(item.id)}
            ><strong>{item.room}</strong><span>{label(item)}</span></button>)}
          </div>
        </div>
      </div>
      <div className={styles.mapControls}>
        <p>{room ? "Blue outline: selected room · Tap any room to explore" : "Tap a labelled room to see its committee"}</p>
        <div><button aria-label="Zoom out" disabled={zoom === 1} onClick={() => setZoom((value) => Math.max(1, value - 1))}><Minus size={17} /></button><span aria-live="polite">{zoom}×</span><button aria-label="Zoom in" disabled={zoom === 4} onClick={() => setZoom((value) => Math.min(4, value + 1))}><Plus size={17} /></button><button aria-label="Fit map to width" disabled={zoom === 1} onClick={() => setZoom(1)}><Maximize2 size={16} /></button></div>
      </div>
    </div>
    </>}
    <div className={styles.roomList} aria-label={query ? "Search results" : `Rooms on Level ${floor}`}>
      {results.length === 0 && <p>No rooms match “{query}”.</p>}
      {results.map((item) => <button key={item.id} aria-pressed={roomId === item.id} onClick={() => chooseRoom(item)}><span><strong>{item.room}</strong><small>{label(item)}</small></span><span>Level {item.floor} <span aria-hidden="true">↗</span></span></button>)}
    </div>
    <a className={styles.resource} href="/maps/sheraton/floor-plans.pdf" target="_blank" rel="noopener noreferrer">Open all hotel floor plans (PDF) ↗</a>
  </>;
}
