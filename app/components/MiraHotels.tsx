'use client';
import { Heading, Text, Blockquote, Button, Link } from '@radix-ui/themes'
import React from 'react'
import * as Separator from "@radix-ui/react-separator";

const MiraHotels = ({translations}) => {
    return (
        <div className='mt-20'>
            <div className='justify-center text-center mx-5'>
                <Heading className='text-medium text-slate-600 text-2xl mb-2'>MIRAMARE HOTELS</Heading>
                <Separator.Root className="absolute left-7 right-7 bg-gray-400 h-[1px] " />
                <Blockquote className=' text-slate-500 text-base mt-5' >Experience the magnificence of the <br></br> Miramare hotel chain an oasis on <br></br>
                    the Mediterranean coast that elevates<br></br> luxury with its 'Ultra All Inclusive'<br></br> services.</Blockquote>
                <Heading className='text-bold  text-slate-600 text-2xl mt-5 mb-1'>MIRAMARE BEACH</Heading>
                <Text className=' text-base text-slate-800'>Side / Antalya</Text>
            </div>
            <div className='relative justify-center items-end my-3 flex'>
                <img src="https://miramarehotels.com/assets/frontend/images/homepage/hotels-display-1.webp" style={{objectFit: "contain"}}>

                </img>
                <Button  highContrast className='absolute border-2 border-white bg-transparent flex-grow mb-3  w-20 h-10 text-white text-center text-sm hover:bg-white hover:text-blue-400'> Visit Page </Button>
            </div>

            <div className='justify-center text-center mx-5'>
                <Heading className='text-bold  text-slate-600 text-2xl mt-5 mb-1'>MIRAMARE QUEEN</Heading>
                <Text className=' text-base text-slate-800'>Side / Antalya</Text>
            </div>

            <div className='relative justify-center items-end mt-3 flex gap-3'>
                <img src="https://miramarehotels.com/assets/frontend/images/homepage/hotels-display-2.webp" style={{objectFit: "contain"}}>

                </img>
                <Button  highContrast className='absolute border-2 border-white bg-transparent flex-grow mb-3 w-20 h-10 text-white text-center text-sm hover:bg-white hover:text-blue-400'> Visit Page </Button>
            </div>

        </div>

    )
}

export default MiraHotels
