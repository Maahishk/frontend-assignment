"use client";

import "./globals.css";
import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/utils/QueryProvider";
import NavBar from "@/components/nav/Nav";
import { RecoilRoot } from "recoil";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "OnlineStore",
  description: "An E-commerce Application",
};

const RootLayout: React.FC<RootLayoutProps> = (props) => {
  return (
    <RecoilRoot>
      <html lang="en">
        <body>
          {" "}
          <NavBar />
          <Providers> {props.children}</Providers>
        </body>
      </html>
    </RecoilRoot>
  );
};
export default RootLayout;
