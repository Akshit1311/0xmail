import React from "react";
import { useWalletStore } from "../../zustand";

const WalletButton = () => {
  const store = useWalletStore((store) => store);

  return (
    <div className="absolute top-0 right-0 border border-slate-500 py-3 rounded-lg px-5 m-4">
      {store.domain || store.walletAddress || "Wallet Not Connected"}
    </div>
  );
};

export default WalletButton;
