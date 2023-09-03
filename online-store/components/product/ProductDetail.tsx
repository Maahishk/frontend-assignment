"use client";
import Image from "next/image";
import React from "react";
import { HiStar } from "react-icons/hi";

export const ProductDetail = (data: any) => {
  const productImage = data?.data?.image?.toString();
  if (data) {
    return (
      <div className="product-info-container">
        <Image
          src={productImage}
          width={300}
          height={300}
          alt="product image"
          className="cursor-zoom-in"
        />

        <div className="flex flex-col gap-2 w-2/3">
          <h1 className="lg:text-2xl md:text-xl text-lg font-bold">
            {data?.data?.title}
          </h1>
          <p className="flex items-center">
            {" "}
            <HiStar color="orange" />
            {""}
            {data?.data?.rating.rate}
          </p>
          <p className="text-gray-500 text-base w-2/3">
            {data?.data?.description}
          </p>
          <p>{data?.data?.category}</p>
          <div className="flex gap-4 md:flex-row flex-col w-2/3">
            {" "}
            <button
              type="button"
              className="common-btn bg-yellow-300 border-black  hover:bg-blue-500"
            >
              Add to cart
            </button>
            <button
              type="button"
              className="common-btn bg-green-600 border-white  hover:bg-red-500"
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    );
  }
};
