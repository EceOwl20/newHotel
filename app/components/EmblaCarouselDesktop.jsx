"use client";
import React, { useEffect, useCallback, useRef } from "react";
import useEmblaCarouselDesktop from "embla-carousel-react";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { IconButton, Button } from "@radix-ui/themes";


export function EmblaCarouselDesktop({ images }) {
  const [emblaRef, emblaApi] = useEmblaCarouselDesktop({
    loop: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi && emblaApi.scrollPrev) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi && emblaApi.scrollNext) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    let intervalId;

    if (emblaApi) {
      intervalId = setInterval(() => {
        emblaApi.scrollNext();
      }, 3000);
    }
    return () => {
      // Temizleme fonksiyonu: bileşenin unmount edildiğinde veya bağımlılıklar değiştiğinde çağrılır
      clearInterval(intervalId);
    };
  }, [emblaApi]);

  

  return (
    <div className="flex overflow-hidden relative " ref={emblaRef}>
      <div className="flex grid-flow-col">
        {images.map((image, index) => (
          <div
            className="flex-[0_0_auto] w-full "
            key={index}
          >
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-6">
        <Button onClick={scrollPrev} className="p-1 ">
          <ChevronLeftIcon width="40" height="40" color="white" />
        </Button>

        <IconButton onClick={scrollNext} className="p-1">
          <ChevronRightIcon width="40" height="40" color="white" />
        </IconButton>
      </div>
    </div>
  );
}

