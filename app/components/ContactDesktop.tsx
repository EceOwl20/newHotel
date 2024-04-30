'use client'
import React from 'react'
import * as Separator from "@radix-ui/react-separator";
import Image from "next/image";
import Link from 'next/link'
import { FaPhoneAlt } from "react-icons/fa";
import { Button, Text } from "@radix-ui/themes";

const ContactDesktop = () => {
  return (
    <section className='flex flex-row justify-center items-center gap-20 bg-slate-50'>
        <div className='flex flex-col justify-start  bg-white h-80 w-80'>
            <div className='flex-col text-center mt-10 gap-5 text-zinc-400'>
            <h2 className='text-2xl  my-2'>CONTACT US</h2>
            <Separator.Root className="mx-9 bg-zinc-300 h-[1px]" />
            <Link href="/" className=" px-2 my-14 inline-flex text-xl items-center text-zinc-600"><FaPhoneAlt className="mx-2" /> +90 (242) 756 11 43</Link>
            <Button className='text-white bg-zinc-600 px-8 py-4 font-semibold'>Let Us Call You</Button>
            </div>
       </div>
       

       <div className='flex flex-row justify-center items-center'>
        <img src='https://miramarehotels.com/assets/frontend/images/contactSection/contact-us-1-beach.webp' alt='contactimage' style={{ objectFit: "contain" }}></img>
       </div>

       <div className='flex items-center '>
       <img src='https://miramarehotels.com/assets/frontend/images/contactSection/contact-us-2-beach.webp' alt='contactimage2' style={{ objectFit: "contain" }} ></img>
       </div>
       
    </section>
  )
}

export default ContactDesktop
