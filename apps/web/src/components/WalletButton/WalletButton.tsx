import React, { useEffect, useState } from "react";
import { useWalletStore } from "../../zustand";
import ethers from "ethers";
import { getName } from "../../helpers/ens";

const WalletButton = () => {
  const store: any = useWalletStore((store) => store);

  const [ens, setEns] = useState("");

  const getEnsName = async () => {
    const ensName = await getName(store.walletAddress);
    if (ensName) setEns(ensName);
    else console.log("Ens Not found");
  };

  useEffect(() => {
    getEnsName();
  }, []);

  return (
    <div className="absolute top-0 right-0 border border-slate-500 py-3 rounded-lg px-5 m-4">
      {store.domain || store.walletAddress || "Wallet Not Connected"}
      {ens ? ` | ${ens}` : ""}
    </div>
  );
};

export default WalletButton;
