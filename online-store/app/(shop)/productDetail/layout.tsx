"use client";

import { Provider } from "react-redux";
import Providers from "@/utils/QueryProvider";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Providers>{children}</Providers>;
}
