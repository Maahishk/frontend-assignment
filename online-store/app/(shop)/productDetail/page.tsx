"use client";

import React from "react";
import { productAtomState } from "@/atoms/productAtom";
import { useRecoilState } from "recoil";
import { ProductDetail } from "@/components/product/ProductDetail";
import Providers from "@/utils/QueryProvider";
import { Products } from "@/type";
import { useProductStore } from "@/stores/productStore";
import { useQuery } from "@tanstack/react-query";

const ProductInfo = () => {
  const pid = useProductStore.getState().id;
  console.log(pid);

  const { data, error, isLoading } = useQuery<Products[]>({
    queryKey: ["products"],
    queryFn: async () =>
      (await fetch(`https://fakestoreapi.com/products/${pid}`).then((res) =>
        res.json()
      )) as Products[],
    suspense: true,
    staleTime: 2 * 1000,
  });

  return (
    <div>
      {" "}
      <Providers>
        {" "}
        <ProductDetail data={data} />
      </Providers>
    </div>
  );
};
export default ProductInfo;
