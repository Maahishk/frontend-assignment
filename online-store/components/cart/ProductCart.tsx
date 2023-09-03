("");

import React, { useState } from "react";
import Image from "next/image";
import { HiStar } from "react-icons/hi";
// import { useRecoilState } from "recoil";
// import { productAtomState } from "@/atoms/productAtom";
import { useStore } from "@/stores/store";
import { useProductStore } from "@/stores/productStore";
import StoreInitializer from "./StoreInitializer";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const ProductCart = (data: any) => {
  // const [productId, setProductId] = useRecoilState(productAtomState);
  const productImage = data?.data?.image.toString();
  const router = useRouter();
  // const [id, setId] = useState(0);

  const handleClick = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | undefined,
    id: number
  ) => {
    e?.preventDefault();

    useProductStore.setState({ id: id });
  };

  //  onClick={() =>
  //                   history.push({
  //                     pathname: "/orders/rating",
  //                     query: { pid: item._id },
  //                   })
  //                 }
  // const handleProductDetailClick = (id: any) => {
  //   setProductId(id);
  //   console.log(productId + "pid");
  // };
  useStore.setState({ name: data?.data?.title, price: data?.data?.price });
  return (
    <div className="product-box">
      <div className="overflow-hidden w-fit">
        {" "}
        <Image
          className="cursor-zoom-in shadow-lg"
          src={productImage}
          width={200}
          height={200}
          alt="Picture of the product"
          objectFit="cover"
        />
      </div>
      <Link
        href="/productDetail"
        className="py-2 "
        onClick={(e) => handleClick(e, data?.data?.id)}
      >
        <h1 className="lg:text-2xl md:text-xl text-lg line-clamp-2 font-bold">
          {data?.data?.title}
        </h1>
        <p className="text-base text-gray-500">{data.data.category}</p>
        <p className="flex gap-1 items-center">
          <HiStar color="orange" />
          {data?.data?.rating.rate}
        </p>
        <p className="font-semibold text-emerald-700 text-lg">
          Rs.{data?.data?.price}
        </p>
      </Link>
      <button
        onClick={() => {
          useStore.setState((state) => ({
            name: state.name,
            price: state.price,
            cartTotal: state.cartTotal,
          }));
        }}
        type="button"
        className="common-btn bg-yellow-300 border-black  hover:bg-blue-500"
      >
        Add to cart
      </button>
    </div>
  );
};
