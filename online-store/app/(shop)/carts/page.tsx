"use client";

import React from "react";
import type { NextPage } from "next";

import { useStore } from "@/stores/store";

const CartsPage = () => {
  const cartTotal = useStore((state) => state.cartTotal);
  const { name, price } = useStore();
  return (
    <div>
      <p>{name}</p>
      <p> {cartTotal.toFixed(2)}</p>
    </div>
  );
};
export default CartsPage;
