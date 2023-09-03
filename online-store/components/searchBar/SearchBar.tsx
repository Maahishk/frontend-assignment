"use client";

import React from "react";
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { setSearch } from "@/store/searchSlice";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const SearchBar = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.Reducer?.search);
  const startupProduct = useAppSelector(
    (state: any) => state.Reducer?.startUpProducts
  );
  return (
    <form className="flex justify-between items-center w-[50%] border rounded-lg overflow-hidden">
      {" "}
      <input
        type="text"
        className="bg-transparent p-2 w-2/3 outline-none"
        placeholder="Search products..."
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />
      <button type="submit" className=" w-fit bg-yellow-500 text-white p-4">
        <FiSearch />
      </button>
    </form>
  );
};
