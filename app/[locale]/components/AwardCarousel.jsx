"use client";
import React, { useEffect, useCallback, useRef } from "react";
import useAwardCarousel from "embla-carousel-react";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { IconButton, Button } from "@radix-ui/themes";

export function AwardCarousel({ images }) {
  const [emblaRef, emblaApi] = useAwardCarousel({
    loop: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi && emblaApi.scrollPrev) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi && emblaApi.scrollNext) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="overflow-hidden relative" ref={emblaRef}>
      <div className="flex grid-flow-col">
        {images.map((image, index) => (
          <div className="flex-[0_0_auto] w-full px-4 " key={index}>
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
