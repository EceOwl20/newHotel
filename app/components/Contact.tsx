'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from "@radix-ui/themes";
import * as Separator from "@radix-ui/react-separator";

const Contact = () => {
    return (
        <div className='flex flex-col justify-center p-10 text-center bg-slate-50'>
            <div className='flex flex-col p-5 border bg-white'>
                <h2 className='text-2xl '>CONTACT US</h2>
                <Separator.Root className="flex mb-5 left-6 right-6 bg-gray-400 h-[1px]" />
                <Link className="text-lg mt-10" href="/"> +90 (242) 756 11 43 </Link>

                <Button className='w-25 p-3  text-lg mt-5 text-white bg-lime-900'> Let Us Call You </Button>
            </div>
        </div>
    )
}

export default Contact
