"use client";

import Image from "next/image";
import { Binoculars, ChartLineUp, SignIn, SignOut, User } from "phosphor-react";

import logo from "@/assets/logo-bookwise.png";
import Avatar from "./Avatar";

export default function NavBar() {
  const isLoggedIn = true;
  const isSelected = true;

  const menuItemsSelectedClass =
    isSelected &&
    "before:absolute before:left-[-20px] before:h-6 before:w-[4px] before:rounded-full before:bg-gradient-to-b before:from-green-150 before:to-purple-150 before:content-['']";

  return (
    <nav className="flex h-[calc(100vh-2.5rem)] w-[232px] flex-col items-center justify-between rounded-xl bg-gray-700 pb-6 pl-0 pr-0 pt-10">
      <Image src={logo} alt="" />

      <div className="mt-16 flex flex-1 flex-col gap-6">
        <button
          className={`relative flex cursor-pointer gap-3 leading-6 text-gray-400  hover:text-gray-100 ${menuItemsSelectedClass}`}
        >
          <ChartLineUp /> Inicio
        </button>
        <button className="relative flex cursor-pointer gap-3 leading-6 text-gray-400 hover:text-gray-100">
          <Binoculars /> Explorar
        </button>
        {isLoggedIn && (
          <button className="relative flex cursor-pointer gap-3 leading-6 text-gray-400 hover:text-gray-100">
            <User /> Perfil
          </button>
        )}
      </div>

      <button className="flex cursor-pointer items-center gap-3">
        {isLoggedIn ? (
          <>
            <Avatar size={32} />
            <span className="font-bold leading-6 text-gray-200">Cristofer</span>
            <SignOut className="text-danger-light" />
          </>
        ) : (
          <>
            <span className="font-bold leading-6 text-gray-200">
              Fazer Login
            </span>
            <SignIn className="text-green-100" />
          </>
        )}
      </button>
    </nav>
  );
}
