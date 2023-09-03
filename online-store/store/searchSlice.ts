"use client";

import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { Products } from "@/type";

export interface SearchState {
  search: string;
  startUpProducts: Products[];
}

const initialState: SearchState = {
  search: "",
  startUpProducts: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setStartupProduct: (state, action: PayloadAction<Products[]>) => {
      state.startUpProducts = action.payload;
    },
  },
});

export const { setSearch, setStartupProduct } = searchSlice.actions;
export default searchSlice.reducer;
