"use client";
import Link from "next/link";
import React, { useState, useEffect, createContext, useContext } from "react";
import { Button, Text } from "@radix-ui/themes";
import {
  TextAlignJustifyIcon,
  TriangleDownIcon,
  CrossCircledIcon,
} from "@radix-ui/react-icons";
import { FaPhoneAlt } from "react-icons/fa";
import * as Separator from "@radix-ui/react-separator";
import Cookies from "js-cookie";
import LangSwitcher from "../../../LangSwitcher";

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [language, setLanguage] = useState(Cookies.get("language") || "TR");

  useEffect(() => {
    Cookies.set("language", language);
  }, [language]);

  // const menu = tranlastions.menu;
  // const book = tranlastions.booknow;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLanguageChange = (language) => {
    var selectBox = document.getElementById("selectBox");
    var language = selectBox.options[selectBox.selectedIndex].value;
    //alert(language);
    Cookies.set("language", language);
    alert(Cookies.get("language", language));
    setLanguage(language);
    window.location.href = "/";
  };

  return (
    <nav className="flex fixed bg-lime-900 z-30 w-full">
      <div className=" mx-auto min-w-full px-2 sm:px-6 md:px-7 lg:px-8 ">
        <div className="relative flex h-28 items-center justify-between ">
          <div className=" absolute inline-flex mx-10 sm:left-[150px] z-50 items-center">
            <div className="bg-black">
              <LangSwitcher />
            </div>
          </div>

          <div className="relative flex flex-shrink-0 sm:justify-center md:flex flex-grow items-center">
            <span className="text-white justify-center flex-grow flex  flex-shrink-0">
              <img
                src="https://miramarehotels.com/assets/frontend/images/header/miramare-logo.svg"
                alt="logo"
                width="auto"
              ></img>
            </span>
          </div>

          <div className=" flex absolute inset-y-0 left-0 items-center justify-start lg:left-0 z-45">
            <Button
              onClick={toggleSidebar}
              className=" inline-flex items-center text-lime-900 bg-lime-900 "
            >
              <TextAlignJustifyIcon className="w-9 h-9 text-white" />
              <Text className="lg:text-white text-xl ">MENU</Text>
            </Button>
          </div>
          <div className=" absolute items-center sm:items-stretch sm:right-0">
            <div className="hidden lg:block space-x-3">
              <Link
                href="/"
                className="text-white px-2 py-2 inline-flex text-xl items-center"
              >
                <FaPhoneAlt className="mx-2" /> +90 (242) 756 11 43
              </Link>
              <Button className="text-lime-900 font-semibold px-6 py-2 text-lg bg-white">
                BOOK NOW
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`lg:w-[400px] mx-auto sm:px-6 lg:px-8 fixed inset-y-0 left-0 bg-white text-black  transition-transform duration-500 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-start items-center px-5 py-3">
          <Button onClick={toggleSidebar} className="py-3 ">
            <CrossCircledIcon className="w-7 h-7" />
          </Button>

          <h1 className="text-xl font-bold px-3 py-5"></h1>
        </div>
        <div className="flex flex-col ">
          <div className="relative">
            <h2 className="inline-flex items-center text-2xl px-8 py-4 mt-10 text-black p-2 ">
              HOTELS
            </h2>
            <div className=" mx-8 bg-gray-400 h-[1px]" />
          </div>
          <Link href="/" className="text-2xl px-8 mt-10 py-4">
            CONTACT
          </Link>
        </div>

        <div className=" mx-8 bg-gray-400 h-[1px]" />

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
