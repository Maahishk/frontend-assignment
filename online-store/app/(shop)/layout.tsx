"use client";

import { Provider } from "react-redux";
import Providers from "@/utils/QueryProvider";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Providers>{children}</Providers>;
}
