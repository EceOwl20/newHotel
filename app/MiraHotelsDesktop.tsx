"use client";
import { Heading, Text, Blockquote, Button, Link } from "@radix-ui/themes";
import React from "react";
import * as Separator from "@radix-ui/react-separator";

const MiraHotelsDesktop = () => {
    return (
        <div className="flex flex-col mt-5">
            <div className="flex flex-col justify-center items-center mx-5">
                <Heading className="text-slate-800 text-4xl justify-center items-center text-center my-8">
                    MIRAMARE HOTELS
                </Heading>
                <p className="text-slate-400 text-lg text-center">
                    Experience the magnificence of the Miramare hotel chain an oasis on
                    <br></br>
                    the Mediterranean coast that elevates luxury with its 'Ultra All
                    Inclusive' services.
                </p>
                <Separator.Root className="relative left-15 right-15 bg-gray-400 h-[1px] " />
            </div>

            <div className="flex flex-row my-8 items-center justify-center gap-10 mx-5">
                <div className="flex flex-col items-center justify-center gap-3">
                    <Heading className="text-slate-800 text-xl font-semibold">MIRAMARE BEACH</Heading>
                    <Text className="text-slate-400 text-base mb-2 font-semibold"> Side / Antalya </Text>
                    <img src="https://miramarehotels.com/assets/frontend/images/homepage/hotels-display-1.webp" style={{ objectFit: "contain" }}></img>
                </div>


                <div className="flex flex-col items-center justify-center gap-3">
                    <Heading className="text-slate-800 text-xl text-center font-semibold">MIRAMARE QUEEN</Heading>
                    <Text className="text-base text-slate-400 mb-2 font-semibold"> Side / Antalya </Text>
                    <img src="https://miramarehotels.com/assets/frontend/images/homepage/hotels-display-2.webp" style={{ objectFit: "cover" }}></img>

                </div>

            </div>
        </div>
    );
};

export default MiraHotelsDesktop;
