import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Products } from "@/type";
import build from "next/dist/build";

// export const productsApi = createApi({
//     reducerPath: "productsApi",
//     baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/products" }),
//     tagTypes: ["products"],
//     endpoints: (build) => {
//         search: build.query<Products[], string>({
//             query: (q) => `search?title=${q}`
//             provideTags:(result, error, search)=>[{type:"products",search}]
//         })
//     }
// });
