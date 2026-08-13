import { useCallback, useEffect, useId, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";

type Props = {
  before: string;
  after: string;
  beforeAlt?: string;
  afterAlt?: string;
};

export function Compare({ before, after, beforeAlt = "Antes", afterAlt = "Depois" }: Props) {
  const track = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(52);
  const dragging = useRef(false);
  const labelId = useId();

  const move = useCallback((clientX: number) => {
    const el = track.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(92, Math.max(8, next)));
  }, []);

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      if (!dragging.current) return;
      move(event.clientX);
    };
    const onUp = () => {
      dragging.current = false;
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [move]);

  const onKey = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setPos((value) => Math.max(8, value - 4));
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      setPos((value) => Math.min(92, value + 4));
    }
    if (event.key === "Home") {
      event.preventDefault();
      setPos(8);
    }
    if (event.key === "End") {
      event.preventDefault();
      setPos(92);
    }
  };

  return (
    <div
      ref={track}
      className="compare"
      style={{ "--pos": `${pos}%` } as CSSProperties}
      onPointerDown={(event) => {
        dragging.current = true;
        (event.currentTarget as HTMLElement).setPointerCapture?.(event.pointerId);
        move(event.clientX);
      }}
    >
      <img className="compare__layer" src={after} alt={afterAlt} draggable={false} />
      <div className="compare__before">
        <img src={before} alt={beforeAlt} draggable={false} />
      </div>
      <span className="compare__tag compare__tag--l">Antes</span>
      <span className="compare__tag compare__tag--r">Depois</span>
      <button
        type="button"
        className="compare__handle"
        aria-labelledby={labelId}
        aria-valuemin={8}
        aria-valuemax={92}
        aria-valuenow={Math.round(pos)}
        role="slider"
        onKeyDown={onKey}
        onPointerDown={(event) => {
          dragging.current = true;
          move(event.clientX);
        }}
      >
        <span className="compare__nub" aria-hidden>
          ‹ ›
        </span>
      </button>
      <span id={labelId} className="sr-only">
        Comparar antes e depois
      </span>
    </div>
  );
}
