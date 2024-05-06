"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button, Text } from "@radix-ui/themes";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { GoTriangleDown } from "react-icons/go";
import { RxCrossCircled } from "react-icons/rx";
import { RxTextAlignJustify } from "react-icons/rx";
import {
    TextAlignJustifyIcon,
    TriangleDownIcon,
    CrossCircledIcon,
} from "@radix-ui/react-icons";
import { FaPhoneAlt } from "react-icons/fa";
import * as Separator from "@radix-ui/react-separator";
import Image from 'next/image'
import { fetchData } from '../data';

type LanguageChangeHandler = (language: string) => void;
//color rgb(33, 37, 41)
const Navbar = ({ onLanguageChange }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false); //mobile drawer's visibility
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('TR');

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const handleLanguageChange = async (language: string) => {
        setSelectedLanguage(language);
        const languageText = await fetchData(textId, language);
        onLanguageChange(language);
        // Dilin metnini kullanarak sayfayı güncelleyin
    };

    return (
        <nav className="flex fixed bg-lime-900 z-30 w-full">
            <div className=" mx-auto min-w-full px-2 sm:px-6 lg:px-8 ">
                <div className="relative flex h-24 items-center justify-between ">
                    <div className="relative  left-[150px] z-50  text-white text-xl ">
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger>
                                <Button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className=" inline-flex flex-row z-50 items-center">
                                    {selectedLanguage === 'TR' ? 'Türkçe' :
                                        selectedLanguage === 'EN' ? 'English' :
                                            selectedLanguage === 'RU' ? 'Русский' :
                                                selectedLanguage === 'DE' ? 'Deutsch' : ''}
                                    <TriangleDownIcon />
                                </Button>
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Portal>
                                <DropdownMenu.Content className="bg-lime-900 px-3 py-5 text- relative z-50 top-[-5px]">
                                    {["TR", "RU", "DE"].map((lang, index) => (
                                        <DropdownMenu.Item
                                            key={index}
                                            className="group text-white hover:bg-white text-xl hover:text-lime-900"
                                            onClick={() => handleLanguageChange(lang)}>
                                            {lang === 'TR' ? 'Türkçe' :
                                                lang === 'EN' ? 'English' :
                                                    lang === 'RU' ? 'Русский' :
                                                        lang === 'DE' ? 'Deutsch' : ''}
                                        </DropdownMenu.Item>
                                    ))}
                                </DropdownMenu.Content>
                            </DropdownMenu.Portal>
                        </DropdownMenu.Root>
                    </div>
                    <div className="relative flex flex-shrink-0 sm:justify-center md:flex flex-grow items-center">
                        <span className="text-white justify-center flex-grow flex  flex-shrink-0">
                            <Image src="https://miramarehotels.com/assets/frontend/images/header/miramare-logo.svg" alt="logo" height={160} width={160}></Image>
                        </span>
                    </div>

                    <div className=" flex absolute inset-y-0 left-0 items-center justify-start lg:left-0 z-45">
                        <Button
                            onClick={toggleSidebar}
                            className=" inline-flex items-center text-lime-900 bg-lime-900 " >
                            <TextAlignJustifyIcon className="w-9 h-9 text-white" />
                            <Text className="lg:text-white text-xl">MENU</Text>
                        </Button>

                    </div>
                    <div className=" absolute items-center sm:items-stretch sm:right-0">
                        <div className="hidden sm:block space-x-3">
                            <Link href="/" className="text-white px-2 py-2 inline-flex text-xl items-center"><FaPhoneAlt className="mx-2" /> +90 (242) 756 11 43</Link>
                            <Button className="text-lime-900 font-semibold px-8 py-4 bg-white">BOOK NOW</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`max-w-7xl mx-auto sm:px-6 lg:px-8 fixed inset-y-0 left-0 bg-white text-black  transition-transform duration-500 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex justify-start items-center px-5 py-3">

                    <Button onClick={toggleSidebar} className="py-3 ">
                        <CrossCircledIcon className="w-7 h-7" />
                    </Button>

                    <h1 className="text-xl font-bold px-3 py-5">MENU</h1>
                </div>
                <div className="flex flex-col ">
                    <div className="relative">
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger>
                                <Button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="inline-flex items-center text-2xl px-8 py-4 my-10 text-black p-2 ">HOTELS
                                    <TriangleDownIcon />
                                </Button>

                            </DropdownMenu.Trigger>
                            <DropdownMenu.Portal>
                                <DropdownMenu.Content className="bg-lime-900 px-3">
                                    <DropdownMenu.Item className="group text-black ">
                                        Miramare Beach
                                    </DropdownMenu.Item>
                                    <DropdownMenu.Item className="group text-black ">
                                        Miramare Queen
                                    </DropdownMenu.Item>

                                </DropdownMenu.Content>
                            </DropdownMenu.Portal>
                        </DropdownMenu.Root>
                        <Separator.Root className="absolute left-7 right-7 bg-gray-400 h-[1px]" />
                    </div>
                    <Link href="/" className="text-2xl px-8 mb-10 mt-10 py-4 ">
                        CONTACTS
                    </Link>
                </div>
                <Separator.Root className="absolute left-11 right-11 bg-gray-400 h-[1px]" />

                <Separator.Root className="absolute left-0 right-0 my-20 bg-gray-400 h-[1px]" />
                <div className="flex flex-col px-10 my-20 items-center justify-center">
                    <Link
                        href="/"
                        className="px-2 inline-flex items-baseline py-8 text-xl"
                    >
                        <FaPhoneAlt className="mx-2" /> +90 (242) 756 11 43
                    </Link>
                    <Button className="w-25 p-5 bg-lime-900 text-white ">
                        Let Us Call You
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

