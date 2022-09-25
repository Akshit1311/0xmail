import React, { useEffect, useState } from "react";
import { useWalletStore } from "../../zustand";
import ethers from "ethers";

const WalletButton = () => {
  const store: any = useWalletStore((store) => store);

  const [ens, setEns] = useState("");
  // useEffect(() => {
  async () => {
    const provider = new ethers.providers.AlchemyProvider(
      "homestead",
      // eslint-disable-next-line turbo/no-undeclared-env-vars
      process.env.NEXT_PUBLIC_ALCHMEY
    );

    const name = await provider.lookupAddress(store.walletAddress);

    if (name) setEns(name);
  };
  // }, [store.walletAddress]);

  return (
    <div className="absolute top-0 right-0 border border-slate-500 py-3 rounded-lg px-5 m-4">
      {store.domain || store.walletAddress || "Wallet Not Connected"}
      {ens ? `| ${ens}` : ""}
    </div>
  );
};

export default WalletButton;
