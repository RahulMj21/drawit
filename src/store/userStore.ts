import { IUser } from "@/types";
import { create } from "zustand";

type Store = {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
};

export const useUserStore = create<Store>()((set) => ({
  user: null,
  setUser: (user) => set(() => ({ user })),
}));
