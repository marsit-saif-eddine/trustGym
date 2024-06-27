"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import React from "react";
import logo from "@/../public/images/trustgym-logo.png";
import Link from "next/link";
import { DoorOpen, Handshake, SquareUserRound } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";

const SaNavBar = () => {
  const pathname = usePathname();
  return (
    <nav className='flex flex-col w-1/5 h-screen justify-start items-center p-4 bg-card '>
      <Image
        src={logo}
        alt='logo'
        objectPosition='center'
        objectFit='cover'
        className='w-44'
      />
      <div className='flex flex-col gap-4 mt-5 w-full px-2'>
        <Link
          href='/partners'
          className={`flex items-center gap-2 w-full justify-start font-medium  cursor-pointer p-2 rounded-md ${
            pathname === "/partners"
              ? "bg-[#F5C400] text-white"
              : "hover:bg-secondary hover:text-secondary-forground"
          }`}>
          <Handshake className='size-5' />
          Partenaire
        </Link>
        <Link
          href='/subscriptions'
          className={`flex items-center gap-2 w-full justify-start font-medium  cursor-pointer p-2 rounded-md ${
            pathname === "/subscriptions"
              ? "bg-[#F5C400] text-white"
              : "hover:bg-secondary hover:text-secondary-forground"
          }`}>
          <SquareUserRound className='size-5' />
          Abonnement
        </Link>
        <Link
          href='/doors'
          className={`flex items-center gap-2 w-full justify-start font-medium  cursor-pointer p-2 rounded-md ${
            pathname === "/doors"
              ? "bg-[#F5C400] text-white"
              : "hover:bg-secondary hover:text-secondary-forground"
          }`}>
          <DoorOpen className='size-5' />
          Gestion des portes
        </Link>
      </div>
      <ModeToggle />
    </nav>
  );
};

export default SaNavBar;
