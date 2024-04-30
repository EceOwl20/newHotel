
'use-client';
import Image from "next/image";
import Navbar from "./components/Navbar";
import { EmblaCarousel } from "./components/EmblaCarousel";
import { Heading, ScrollArea } from "@radix-ui/themes";
import MiraHotels from "./MiraHotels";
import React, { useState, useEffect } from 'react';
import FooterMobil from "./components/FooterMobil";
import { AwardCarousel } from "./components/AwardCarousel";
import Contact from "./components/Contact";
import FooterDesktop from "./components/FooterDesktop";
import { EmblaCarouselDesktop } from "./components/EmblaCarouselDesktop";
import MiraHotelsDesktop from "./MiraHotelsDesktop";


const images = [
  "https://miramarehotels.com/assets/frontend/images/homepage/homepage-hero/homepage-hero-2-mobile.webp",
  "https://miramarehotels.com/assets/frontend/images/homepage/homepage-hero/homepage-hero-1-mobile.webp",
  "https://miramarehotels.com/assets/frontend/images/homepage/homepage-hero/homepage-hero-3-mobile.webp",
  "https://miramarehotels.com/assets/frontend/images/homepage/homepage-hero/homepage-hero-4-mobile.webp",
  "https://miramarehotels.com/assets/frontend/images/homepage/homepage-hero/homepage-hero-5-mobile.webp",
  "https://miramarehotels.com/assets/frontend/images/homepage/homepage-hero/homepage-hero-6-mobile.webp",
];
const imagesDesktop = [
  "https://miramarehotels.com/assets/frontend/images/homepage/homepage-hero/homepage-hero-1.webp",
  "https://miramarehotels.com/assets/frontend/images/homepage/homepage-hero/homepage-hero-2.webp",
  "https://miramarehotels.com/assets/frontend/images/homepage/homepage-hero/homepage-hero-3.webp",
  "https://miramarehotels.com/assets/frontend/images/homepage/homepage-hero/homepage-hero-4.webp",
  "https://miramarehotels.com/assets/frontend/images/homepage/homepage-hero/homepage-hero-5.webp",
  "https://miramarehotels.com/assets/frontend/images/homepage/homepage-hero/homepage-hero-6.webp",
]
const imageAwards = [
  "https://miramarehotels.com/assets/frontend/images/homepage/awards-2.webp",
  "https://miramarehotels.com/assets/frontend/images/homepage/awards-3.webp",
  "https://miramarehotels.com/assets/frontend/images/homepage/awards/award1.webp",
  "https://miramarehotels.com/assets/frontend/images/homepage/awards/award2.webp",
  "https://miramarehotels.com/assets/frontend/images/homepage/awards/award3.webp",
  "https://miramarehotels.com/assets/frontend/images/homepage/awards/award4.webp",
  "https://miramarehotels.com/assets/frontend/images/homepage/awards/award5.webp",
  "https://miramarehotels.com/assets/frontend/images/homepage/awards/award6.webp",
  "https://miramarehotels.com/assets/frontend/images/homepage/awards/award8.webp",
  "https://miramarehotels.com/assets/frontend/images/homepage/awards/award9.webp",
  "https://miramarehotels.com/assets/frontend/images/homepage/awards/award10.webp",
  "https://miramarehotels.com/assets/frontend/images/homepage/awards/award11.webp",
  "https://miramarehotels.com/assets/frontend/images/homepage/awards/award12.webp"

]

export default function Home() {
  return (
    <div className="flex flex-col " >
      <Navbar />
      <div className="hidden relative py-6 sm:flex flex-col justify-center">
      <EmblaCarousel images={imagesDesktop} />
        
      </div>
      <div className="sm:hidden relative flex flex-row my-4">
      <EmblaCarousel images={images} />
        
      </div>
      <div className="hidden relative py-6 sm:flex flex-col justify-center">
      
        <MiraHotelsDesktop />
      </div>
      <div className="sm:hidden relative flex flex-row my-4">
      
        <MiraHotels />
      </div>

      <div className="flex items-center justify-center my-10">
        <h2 className="text-2xl text-slate-600"> OUR AWARDS </h2>
      </div>

      <AwardCarousel images={imageAwards} />
      <Contact />

      
      <div className="hidden relative py-6 sm:flex flex-col justify-center">
        <FooterDesktop />
      </div>
      <div className="sm:hidden relative flex flex-row my-4">
        <FooterMobil />

      </div>



    </div>

  );
}
/**<div className="hidden relative py-6 sm:flex flex-col justify-center">
      <EmblaCarouselDesktop images={imagesDesktop} />
      </div>
      <div className="sm:hidden relative flex flex-row">
        <EmblaCarousel images={images} />

      </div> */
