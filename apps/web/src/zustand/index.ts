import create from "zustand";

export const useWalletStore = create((set) => ({
  domain: "",
  walletAddress: "",
  loginMethod: "",
  setStore: (newStore: any) => set(() => ({ ...newStore })),
}));
