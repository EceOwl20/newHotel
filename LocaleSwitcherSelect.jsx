"use client";
import clsx from "clsx";
import { useTransition } from "react";
import { useRouter, usePathname } from "@/navigation";
import React, { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  function handleLangChange(lang) {
    setIsOpen(false);
    startTransition(() => {
      router.replace(pathname, { locale: lang });
    });
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-row items-center justify-center gap-1  rounded-md px-4 py-2 font-medium text-white mix-blend-difference lg:px-2 2xl:px-4"
      >
        {label}
        <MdOutlineArrowDropDown />
      </button>
      {isOpen && (
        <div className="absolute z-50 mt-1 rounded border border-gray-200 bg-white shadow-lg">
          <ul className="py-1">
            {React.Children.map(children, (child) => {
              if (child.props.value === defaultValue) {
                return;
              }
              return (
                <li
                  key={child.key}
                  className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                  onClick={() => handleLangChange(child.key)}
                >
                  {child.props.children}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
