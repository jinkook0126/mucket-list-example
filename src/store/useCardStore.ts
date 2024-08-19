import { FoodItem } from "@/types/mucket";
import { create } from "zustand";
import dayjs from "dayjs";

type Store = {
  muckets: FoodItem[];
  register: (mucket: string, id: string, tag: string) => void;
  remove: (idx: string) => void;
  update: (idx: string, state: boolean) => void;
  setData: (lists: FoodItem[]) => void;
};

const useFoodStore = create<Store>()((set) => ({
  muckets: [],
  register: (mucket, id, tag) =>
    set((state) => ({
      muckets: [
        ...state.muckets,
        {
          mucket,
          tag,
          id,
          done: false,
        },
      ],
    })),
  remove: (id) =>
    set((state) => ({
      muckets: state.muckets.filter((item) => item.id !== id),
    })),
  update: (id, stat) =>
    set((state) => ({
      muckets: state.muckets.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            done: stat,
            ...(stat && { date: dayjs().format("YYYY-MM-DD") }),
          };
        }
        return item;
      }),
    })),
  setData: (lists) => set(() => ({ muckets: lists })),
}));

export default useFoodStore;
