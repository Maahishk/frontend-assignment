"use client";

import { useStore } from "@/stores/store";
import { useRef } from "react";

function StoreInitializer({ name, price }: { name: string; price: number }) {
  const initialized = useRef(false);
  if (!initialized.current) {
    useStore.setState({ name, price });
    initialized.current = true;
  }
  return null;
}
export default StoreInitializer;
