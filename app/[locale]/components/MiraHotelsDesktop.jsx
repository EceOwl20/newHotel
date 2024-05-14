"use client";
import { Heading, Text, Blockquote, Button, Link } from "@radix-ui/themes";
import React from "react";
import * as Separator from "@radix-ui/react-separator";

const MiraHotelsDesktop =  ({translations}) => {
    
    const hotel = translations.mirahotel;
    const defHotel=translations.defhotel;
    const beach=translations.beach;
    const queen=translations.queen;
    const side=translations.side;
    const visit=translations.visit;

    return (
        <div className="flex flex-col mt-5">
            <div className="flex flex-col justify-center items-center mx-5">
                <Heading className="text-slate-800 text-4xl justify-center items-center text-center my-8">
                    {hotel}
                </Heading>
                <p className="text-slate-400 text-lg text-center">
                    {defHotel}
                </p>
                <Separator.Root className="relative left-15 right-15 bg-gray-400 h-[1px] " />
            </div>

            <div className="flex flex-row my-8 items-center justify-center gap-10 mx-5 relative">
                <div className="flex flex-col items-center justify-end gap-3">
                    <Heading className="text-slate-800 text-xl font-semibold">{beach}</Heading>
                    <Text className="text-slate-400 text-base mb-2 font-semibold"> {side} </Text>
                    <img src="https://miramarehotels.com/assets/frontend/images/homepage/hotels-display-1.webp" style={{ objectFit: "contain" }}></img>
                    <Button highContrast className='absolute border-2 items-end border-white bg-transparent flex-grow mb-3  w-[150px] h-[50px] text-white text-center text-lg font-medium hover:bg-white hover:text-blue-400'> {visit}</Button>
                </div>


                <div className="flex flex-col items-center justify-end gap-3 relative">
                    <Heading className="text-slate-800 text-xl text-center font-semibold">{queen}</Heading>
                    <Text className="text-base text-slate-400 mb-2 font-semibold"> {side} </Text>
                    <img src="https://miramarehotels.com/assets/frontend/images/homepage/hotels-display-2.webp" style={{ objectFit: "cover" }}></img>
                    <Button highContrast className='absolute border-2 border-white bg-transparent flex-grow mb-3 w-[150px] h-[50px] text-white text-center text-lg font-medium hover:bg-white hover:text-blue-400'> {visit}</Button>

                </div>

            </div>
        </div>
    );
};

export default MiraHotelsDesktop;
