"use client";
import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { IconButton, Button } from "@radix-ui/themes";

export function EmblaCarousel({ images }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2000 }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div
      className=" overflow-hidden relative mt-16"
      ref={emblaRef}
    >
      <div className="flex grid-flow-col">
        {images.map((image, index) => (
          <div className="flex-[0_0_auto] " key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-between p-6">
        <Button className="p-1 " onClick={scrollPrev} type="button">
          <ChevronLeftIcon width="40" height="40" color="white" />
        </Button>

        <IconButton onClick={scrollNext} className="p-1">
          <ChevronRightIcon width="40" height="40" color="white" />
        </IconButton>
      </div>
    </div>
  );
}

