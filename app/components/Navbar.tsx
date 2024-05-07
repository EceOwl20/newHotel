"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Button, Text } from "@radix-ui/themes";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { TextAlignJustifyIcon, TriangleDownIcon, CrossCircledIcon, } from "@radix-ui/react-icons";
import { FaPhoneAlt } from "react-icons/fa";
import * as Separator from "@radix-ui/react-separator";
import Image from 'next/image'
import { fetchTextsByLanguage } from "../lib/data";



const Navbar = ({ children }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false); //mobile drawer's visibility
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };


    // const textMenu = fetchTextsByLanguage(1, "EN");
    // const textBook = fetchTextsByLanguage(2, "EN");
    // const textContact = fetchTextsByLanguage(3, "EN");
    // const textCall = fetchTextsByLanguage(4, "EN");

    return (
        <nav className="flex fixed bg-lime-900 z-30 w-full">
            <div className=" mx-auto min-w-full px-2 sm:px-6 lg:px-8 ">
                <div className="relative flex h-28 items-center justify-between ">
                    <div className="absolute flex right-0 sm:left-[150px]  z-50  text-white text-xl ">
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className=" inline-flex flex-row z-50 items-center">EN
                            </DropdownMenu.Trigger>
                            <TriangleDownIcon />
                            <DropdownMenu.Portal>
                                <DropdownMenu.Content className="bg-lime-900 px-3 py-5 text- relative z-50 top-[-5px]">
                                    {["TR", "RU", "DE"].map((lang, index) => (
                                        <DropdownMenu.Item
                                            key={index}
                                            className="group text-white hover:bg-white text-xl hover:text-lime-900"
                                        >
                                            {lang}
                                        </DropdownMenu.Item>
                                    ))}
                                </DropdownMenu.Content>
                            </DropdownMenu.Portal>
                        </DropdownMenu.Root>
                    </div>
                    <div className="relative flex flex-shrink-0 sm:justify-center md:flex flex-grow items-center">
                        <span className="text-white justify-center flex-grow flex  flex-shrink-0">
                            <img src="https://miramarehotels.com/assets/frontend/images/header/miramare-logo.svg" alt="logo" width="auto"></img>
                        </span>
                    </div>

                    <div className=" flex absolute inset-y-0 left-0 items-center justify-start lg:left-0 z-45">
                        <TextAlignJustifyIcon className="w-9 h-9 text-white" />
                        <Button
                            onClick={toggleSidebar}
                            className=" inline-flex items-center text-lime-900 bg-lime-900 " >

                            <Text className="lg:text-white text-xl ">Menu</Text>
                        </Button>

                    </div>
                    <div className=" absolute items-center sm:items-stretch sm:right-0">
                        <div className="hidden sm:block space-x-3">
                            <Link href="/" className="text-white px-2 py-2 inline-flex text-xl items-center"><FaPhoneAlt className="mx-2" /> +90 (242) 756 11 43</Link>
                            <Button className="text-lime-900 font-semibold px-6 py-2 text-lg bg-white">Book Now</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`lg:w-[400px] mx-auto sm:px-6 lg:px-8 fixed inset-y-0 left-0 bg-white text-black  transition-transform duration-500 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex justify-start items-center px-5 py-3">

                    <Button onClick={toggleSidebar} className="py-3 ">
                        <CrossCircledIcon className="w-7 h-7" />
                    </Button>

                    <h1 className="text-xl font-bold px-3 py-5">Menu</h1>
                </div>
                <div className="flex flex-col ">
                    <div className="relative">
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="inline-flex items-center text-2xl px-12 py-4 mt-10 text-black p-2 ">
                                HOTELS
                                <TriangleDownIcon />
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Portal>
                                <DropdownMenu.Content className="bg-white px-5 z-40 mb-40 text-center group text-black text-xl">
                                    <DropdownMenu.Item className="">
                                        Miramare Beach
                                    </DropdownMenu.Item>
                                    <DropdownMenu.Item className="">
                                        Miramare Queen
                                    </DropdownMenu.Item>

                                </DropdownMenu.Content>
                            </DropdownMenu.Portal>
                        </DropdownMenu.Root>
                        <Separator.Root className="absolute left-7 right-7 bg-gray-400 h-[1px]" />
                    </div>
                    <Link href="/" className="text-2xl px-8  mt-10 py-4">
                        Contact
                    </Link>
                </div>
                <Separator.Root className="absolute left-11 right-11 bg-gray-400 h-[1px]" />

                <Separator.Root className="relative mt-40 bg-gray-400 h-[1px]" />
                <div className="flex flex-col  items-center justify-center">
                    <Link
                        href="/"
                        className="px-2 inline-flex items-baseline py-8 text-xl"
                    >
                        <FaPhoneAlt className="mx-2" /> +90 (242) 756 11 43
                    </Link>
                    <Button className="w-25 p-5 bg-lime-900 text-white ">
                        Let us call you
                    </Button>


                </div>
            </div>

        </nav>

    );
};

export default Navbar;