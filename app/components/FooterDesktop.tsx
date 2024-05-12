"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FOOTER_LINK, SOCIALS } from "../constants";
import { Text } from "@radix-ui/themes";
import * as Separator from "@radix-ui/react-separator";

const FooterDesktop = ({language}) => {
  return (
    <footer className="bg-[url('https://miramarehotels.com/assets/frontend/images/footer/footer-desktop.webp')] relative">
      <div className="bg-black/50 absolute inset-0 z-[1]"></div>
      <div className="flex flex-col w-full z-10 ">
        <div className="flex text-white gap-20 z-10 justify-between">
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
            width="auto"
            height="auto"
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
                      <img src={link} alt="logo" width="auto" />
                    </Link>
                  ))}
                </ul>
                <Link href="/" className="text-white text-sm">
                  <p className="mt-5 text-base hover:text-sky-700">
                    Social Platforms Privacy Policy
                  </p>
                </Link>
              </FooterColumn>
            </div>
          </div>
        </div>
        <Separator.Root className="relative bg-white h-[1px] mx-20 w-110 z-10" />
        <div className="flex flex-col items-center gap-15 z-10  text-white">
          <div
            className="flex flex-wrap gap-10 justify-center mt-2
                     text-white text-center text-xl font-semibold "
          >
            {FOOTER_LINK.map((columns) => (
              <FooterColumn title={columns.title} key={columns.links} >
                <ul className=" flex flex-col gap-1 text-base ">
                  {columns.links.map((link) => (
                    <Link className="hover:text-slate-500" href="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
          </div>
        </div>
      </div>
      <div className="border mt-7 bg-slate-700 z-10 items-center">
        <p className="regular-14 text-s  text-start text-white">
          Miramare Hotels Zafer Turizm Otelcilik İnşaat A.Ş.
        </p>
        <p className="regular-14 text-s text-end text-white z-10">
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
      <h4 className="bold-15 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default FooterDesktop;

