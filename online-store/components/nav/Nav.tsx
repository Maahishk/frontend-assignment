"use client";

import Link from "next/link";
import React from "react";
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";

const NavBar = () => {
  return (
    <header>
      <nav>
        <a
          href="/"
          className="lg:text-2xl md:text-xl text-lg font-bold text-yellow-500"
        >
          OnlineStore
        </a>

        <a
          href="/carts"
          className="flex items-center gap-1 hover:text-yellow-500 cursor-pointer"
        >
          My cart{" "}
          <PiShoppingCartSimpleDuotone className="text-lg " title="My cart" />
        </a>
      </nav>
    </header>
  );
};

export default NavBar;
