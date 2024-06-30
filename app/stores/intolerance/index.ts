import { create } from "zustand";
import { IntoleranceKey } from "./Intolerance";

type IntoleranceStore = {
  intolerancies: IntoleranceKey[];
  add(key: IntoleranceKey): void;
  remove(key: IntoleranceKey): void;
  toggle(key: IntoleranceKey): void;
};

export const useIntoleranceStore = create<IntoleranceStore>((set, get) => ({
  intolerancies: [],
  add: (value: IntoleranceKey) =>
    set((state) => ({ intolerancies: [...state.intolerancies, value] })),
  remove: (value: IntoleranceKey) =>
    set((state) => ({
      intolerancies: state.intolerancies.filter((int) => int !== value),
    })),
  toggle: (value: IntoleranceKey) => {
    const { intolerancies, add, remove } = get();

    if (intolerancies.includes(value)) {
      return remove(value);
    }

    return add(value);
  },
}));
