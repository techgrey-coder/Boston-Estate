"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FloatingDevButton() {
  const router = useRouter();

  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);

  const [start, setStart] = useState({ x: 0, y: 0 });
  const [pointerStart, setPointerStart] = useState({ x: 0, y: 0 });

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setDragging(true);
    setHasMoved(false);

    setStart({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });

    setPointerStart({
      x: e.clientX,
      y: e.clientY,
    });

    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;

    const dx = e.clientX - pointerStart.x;
    const dy = e.clientY - pointerStart.y;

    // only count as drag after 8px movement
    if (Math.abs(dx) > 8 || Math.abs(dy) > 8) {
      setHasMoved(true);
    }

    setOffset({
      x: e.clientX - start.x,
      y: e.clientY - start.y,
    });
  };

  const onPointerUp = () => {
    setDragging(false);

    if (!hasMoved) {
      router.push("/developer");
    }
  };

  return (
    <div
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      className={`fixed bottom-5 left-5 z-50 touch-none
      cursor-grab active:cursor-grabbing
      ${dragging ? "scale-110" : "scale-100"}
      ${!dragging ? "animate-bounce" : ""}`}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: dragging ? "none" : "transform 0.2s ease",
      }}
    >
      <div className="group relative bg-black text-white px-4 py-2 rounded-full shadow-lg ring-2 ring-white/20 hover:ring-white/40 transition">
        <span>💬</span>

        <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition text-sm bg-black px-2 py-1 rounded whitespace-nowrap">
          Contact Developer
        </span>
      </div>
    </div>
  );
}