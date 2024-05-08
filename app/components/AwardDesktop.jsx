"use client";
import React, { useEffect, useCallback, useRef, useState } from "react";
import useAwardDesktop from "embla-carousel-react";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { IconButton, Button } from "@radix-ui/themes";
import Image from 'next/image'

export function AwardDesktop({ images }) {
  const [emblaRef, emblaApi] = useAwardDesktop({
    loop: true,
  });

  const [curr, setCurr] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi && emblaApi.scrollPrev) emblaApi.scrollPrev();
    setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));
    //setCurr(newIndex);
  }, [emblaApi, curr, images.length]);

  const scrollNext = useCallback(() => {
    if (emblaApi && emblaApi.scrollNext) emblaApi.scrollNext();
    setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));
    //setCurr(newIndex);
  }, [emblaApi, curr, images.length]);

    const handleJump = useCallback((index) => {
    if (emblaApi && emblaApi.scrollTo) emblaApi.scrollTo(index);
    setCurr(index);
  }, [emblaApi]);



const onSelect = useCallback(() => {
  if (!emblaApi) return;
  setCurr(emblaApi.selectedScrollSnap());
}, [emblaApi]);

useEffect(() => {
  if (!emblaApi) return;
  emblaApi.on("select", onSelect);
  return () => emblaApi.off("select", onSelect);
}, [emblaApi, onSelect]);

// useEffect(() => {
//   if (!emblaApi) return;
//   curr !== emblaApi.selectedScrollSnap() && emblaApi.scrollTo(curr);
// }, [curr, emblaApi]);





  return (
    <div className="flex flex-col mx-[300px]">
      <div className="overflow-hidden relative h-[620px] " ref={emblaRef}>
        <div className="flex grid-flow-col transition-transform ease-out duration-500">
          {images.map((image, index) => (
            <div className="flex-[0_0_auto] px-2" key={index}>
              <img
              className="mx-1"
                height='auto'
                width={400}
                layout="responsive"
                style={{ objectFit: "contain" }}
                src={image}
                alt={`Slide ${index + 1}`}
              />
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

        <div className="absolute bottom-4 right-0 left-0">
          <div className="flex items-center justify-center gap-3">
            {images.map((_, i) => (
              <div
                key={i}
                className={`transition-all mt-8 w-4 h-4 bg-slate-300 rounded-full ${
                  curr === i ? "p-2" : "bg-slate-600"
                }`}
                onClick={()=> handleJump(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
