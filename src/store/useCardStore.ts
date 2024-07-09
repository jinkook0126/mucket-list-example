import { FoodItem } from "@/types/mucket";
import { create } from "zustand";

type Store = {
  cursor: number;
  muckets: FoodItem[];
  register: (mucket: string) => void;
  remove: (idx: number) => void;
  update: (idx: number, state: boolean) => void;
};

const useFoodStore = create<Store>()((set) => ({
  muckets: [],
  cursor: 0,
  register: (mucket) =>
    set((state) => ({
      cursor: state.cursor + 1,
      muckets: [
        ...state.muckets,
        {
          contents: mucket,
          done: false,
          idx: state.cursor,
        },
      ],
    })),
  remove: (idx) =>
    set((state) => ({
      muckets: state.muckets.filter((item) => item.idx !== idx),
    })),
  update: (idx, stat) =>
    set((state) => ({
      muckets: state.muckets.map((item) => {
        if (item.idx === idx) {
          return { ...item, done: stat, ...(stat && { date: new Date() }) };
        }
        return item;
      }),
    })),
}));

export default useFoodStore;
