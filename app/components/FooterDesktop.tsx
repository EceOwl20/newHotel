"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FOOTER_LINK, SOCIALS } from "../constants";
import { Heading, Text } from "@radix-ui/themes";
import * as Separator from "@radix-ui/react-separator";

const FooterDesktop = () => {
  return (
    <footer className="bg-[url('https://miramarehotels.com/assets/frontend/images/footer/footer-desktop.webp')]">
      <div className="flex flex-col w-full ">
        <div className="flex text-white gap-20 justify-between">
          <div
            className=" flex-col items-start justify-start mx-4 gap-10 mt-5
                     text-white text-end text-lg "
          >
            <h2 className=" text-2xl">CONTACT US</h2>

            <Text> Or send a message </Text>
          </div>

          <img
            className="flex justify-center items-center"
            src="https://miramarehotels.com/assets/frontend/images/header/miramare-logo.svg"
            alt="logo"
            width={300}
            height={300}
          />

          <div className="  p-5 flex-col justify-end text-center text-white">
            <div className="flex flex-col gap-5 mb-5">
              <h2 className=" text-2xl">FOLLOW US</h2>
              <Text className="font-bold text-base">
                Don't miss the opportunities
              </Text>
              <FooterColumn title={""} >
                <ul className="regular-14 flex gap-8 justify-between ">
                  {SOCIALS.links.map((link) => (
                    <Link href="/" key={link}>
                      <img src={link} alt="logo" width={25} height={25} />
                    </Link>
                  ))}
                </ul>
                <Link href="/" className="text-white text-sm">
                  <p className="mt-5 text-base">
                    Social Platforms Privacy Policy
                  </p>
                </Link>
              </FooterColumn>
            </div>
          </div>
        </div>
        <Separator.Root className="relative bg-white h-[1px] mx-20 w-110" />
        <div className="flex flex-col items-center gap-15  text-white">
          <div
            className="flex flex-wrap gap-10 justify-center mt-2
                     text-white text-center text-xl font-semibold"
          >
            {FOOTER_LINK.map((columns) => (
              <FooterColumn title={columns.title}>
                <ul className=" flex flex-col gap-1 text-base">
                  {columns.links.map((link) => (
                    <Link href="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
          </div>
        </div>
      </div>
      <div className="border mt-7 bg-black">
        <p className="regular-14 text-xs  text-center text-gray-500">
          Miramare Hotels Zafer Turizm Otelcilik İnşaat A.Ş.
        </p>
        <p className="regular-14 text-xs text-center text-gray-500">
          Powered by DGTLFACE | All rights reserved
        </p>
    </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex-col items-center justify-center gap-5 text-center">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default FooterDesktop;
/** */
