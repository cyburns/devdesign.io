import { create } from "zustand";

type Store = {
  user: any;
  login: (user: any) => void;
  logout: () => void;
  setUser: (user: any) => void;
};

const useAuthStore = create<Store>()((set) => ({
  user: null,
  login: (user) => set({ user }),
  logout: () => set({ user: null }),
  setUser: (user) => set({ user }),
}));

export default useAuthStore;
