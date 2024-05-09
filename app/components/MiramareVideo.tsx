"use client"
import React from 'react'
import { CgPlayButtonO } from "react-icons/cg";
import { Button, Text, Blockquote } from "@radix-ui/themes";
import * as Separator from "@radix-ui/react-separator";
import Link from "next/link";

const MiramareVideo = () => {
  return (
    <div className="relative w-full h-[800px] bg-[url('https://miramarehotels.com/assets/frontend/images/homepage/homepage-video-background.webp')] " >
      <div className='bg-black/50 absolute inset-0 z-[1] '></div>
     
      <div className='absolute inset-0 flex items-center justify-center z-10'>
        <Link className=' flex ' href="https://www.youtube.com/embed/1Er9UedpVLI?si=--qNDHNSmLIGsRpK">
          <CgPlayButtonO className='w-20 h-20  text-white'/>
        </Link>
      </div>

      <div className='absolute left-[70%] top-[40%] text-white text-center z-10'>
        <h2 className='text-3xl font-medium justify-end '>DREAM VACATION</h2>
        <div className='h-[1px] bg-slate-400 z-10 my-3'></div>
        <Text className='text-lg '>Unleash your inner adventurer at our vibrant hotels in the<br></br> heart of Side, Antalya. Experience the exhilarating energy of <br></br>this lively area.</Text>
      </div>
      

    </div>
  )
}

export default MiramareVideo
