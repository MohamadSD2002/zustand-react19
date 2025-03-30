import { create } from "zustand";

export const useCountStore = create((set) => ({
  count: 0,
  action: {
    increament: (state) => {
      set((state) => ({ ...state, count: state.count + 1 }))
    },
    decreament: (state) => {
      set((state) => ({ ...state, count: state.count - 1 }))
    },
  },
}))
