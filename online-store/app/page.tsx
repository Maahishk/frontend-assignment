"use client";

import { ProductCart } from "@/components/cart/ProductCart";
import { SearchBar } from "@/components/searchBar/SearchBar";
import { useQuery } from "@tanstack/react-query";
import { Products } from "@/type";
import SearchProvider from "@/utils/StoreProvider";

async function getProducts() {
  return (await fetch("https://fakestoreapi.com/products").then((res) =>
    res.json()
  )) as Products[];
}

const HomePage: React.FC = () => {
  const { data, error, isLoading } = useQuery<Products[]>({
    queryKey: ["products"],
    queryFn: () => getProducts(),
    suspense: true,
    staleTime: 5 * 1000,
  });

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <SearchProvider>
      {" "}
      <div className="flex flex-col items-center lg:p-10 md:p-6 p-4 gap-4">
        <SearchBar />
        <div className="w-full lg:columns-4 lg:gap-8 md:columns-3 columns-2 md:gap-6 gap-4">
          {data?.map((item, index) => {
            return <ProductCart key={index} data={item} />;
          })}
        </div>
      </div>
    </SearchProvider>
  );
};
export default HomePage;
