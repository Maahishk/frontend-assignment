"use client";

import { NextResponse } from "next/server";
import { useQuery } from "@tanstack/react-query";
import { Products } from "@/type";

async function getProducts() {
  return (await fetch("https://fakestoreapi.com/products").then((res) =>
    res.json()
  )) as Products[];
}

export async function GET(req: Request) {
  const { data, error, isLoading } = useQuery<Products[]>({
    queryKey: ["products"],
    queryFn: () => getProducts(),
    suspense: true,
    staleTime: 5 * 1000,
  });
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("name");
  const searchData = data?.filter((p) =>
    p.title.toLowerCase().includes(title?.toLowerCase() ?? "")
  );

  return NextResponse.json(searchData);
}
