import { useState, useEffect, useRef, useCallback } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
  images: string[];
  alt: string;
  autoScrollInterval?: number;
}

export function ImageCarousel({ images, alt, autoScrollInterval = 3500 }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => {
    setCurrent(c => (c + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setCurrent(c => (c - 1 + images.length) % images.length);
  }, [images.length]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, autoScrollInterval);
  }, [next, autoScrollInterval]);

  useEffect(() => {
    timerRef.current = setInterval(next, autoScrollInterval);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [next, autoScrollInterval]);

  const handleWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      if (e.deltaX > 20) { next(); resetTimer(); }
      else if (e.deltaX < -20) { prev(); resetTimer(); }
    } else {
      if (e.deltaY > 20) { next(); resetTimer(); }
      else if (e.deltaY < -20) { prev(); resetTimer(); }
    }
  };

  const handlePrev = () => { prev(); resetTimer(); };
  const handleNext = () => { next(); resetTimer(); };

  if (images.length === 0) return null;

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden shadow-xl"
      onWheel={handleWheel}
      style={{ touchAction: "pan-y" }}
    >
      <div className="relative h-56 md:h-64 bg-slate-100 dark:bg-slate-800">
        {images.map((src, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
          >
            <ImageWithFallback
              src={src}
              alt={`${alt} ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Nav buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}

        {/* Dots */}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => { setCurrent(i); resetTimer(); }}
                className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                style={{ backgroundColor: i === current ? "white" : "rgba(255,255,255,0.45)" }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
