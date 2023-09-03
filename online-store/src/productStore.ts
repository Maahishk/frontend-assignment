import { create } from "zustand";

export const useProductStore = create<{
  id: number;
}>((set) => ({
  id: 1,
}));
