"use client"
import React from 'react'
import Link from "next/link";
import { CgPlayButtonO } from "react-icons/cg";
import {Text } from "@radix-ui/themes";

const MiramareVideoMobil = () => {
    return (
        <div className='relative w-full h-[570px] '>
            <div className="relative w-full h-[380px] bg-[url('https://miramarehotels.com/assets/frontend/images/homepage/homepage-video-background-480.webp')] " >
                <div className='bg-black/50 absolute inset-0 z-[1] '></div>

                <div className='absolute inset-0 flex items-center justify-center z-10'>
                    <Link className=' flex ' href="https://www.youtube.com/embed/1Er9UedpVLI?si=--qNDHNSmLIGsRpK">
                        <CgPlayButtonO className='w-20 h-20  text-white' />
                    </Link>
                </div>
            </div>

            <div className='flex flex-col text-center justify-center items-center mt-8 z-10'>
                <h2 className='text-2xl'>DREAM VACATION</h2>
                <div className='h-[1px] bg-slate-400 z-10 my-3'></div>
                <Text className="text-base">Unleash your inner adventurer at our <br></br> vibrant hotels in the heart of Side, <br></br>  Antalya. Experience the exhilarating <br></br> energy of this lively area.</Text>
            </div>
        </div>
    )
}

export default MiramareVideoMobil
