"use client";

import { useState, useEffect, useRef } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import Image from "next/image";

interface Props {
  images: string[];
}

const ImageCarousel = ({ images }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Refs for the buttons
  const prevButtonRef = useRef<HTMLButtonElement | null>(null);
  const nextButtonRef = useRef<HTMLButtonElement | null>(null);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    nextButtonRef.current?.focus();
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    prevButtonRef.current?.focus();
  };

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        prevImage();
      } else if (event.key === "ArrowRight") {
        nextImage();
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [images.length]);

  return (
    <div className="relative w-full" aria-live="polite">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        <Image
          alt={`Slide ${currentIndex + 1}`}
          src={images[currentIndex]}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={currentIndex === 0}
          style={{ objectFit: "cover", transition: "opacity 0.5s ease-in-out" }}
        />
      </div>

      <button
        type="button"
        onClick={prevImage}
        ref={prevButtonRef}
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none "
        aria-label="Previous image"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:bg-white">
          <FaChevronCircleLeft size={32} />
        </span>
      </button>

      <button
        type="button"
        onClick={nextImage}
        ref={nextButtonRef}
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        aria-label="Next image"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:bg-white">
          <FaChevronCircleRight size={32} />
        </span>
      </button>
    </div>
  );
};

export default ImageCarousel;
