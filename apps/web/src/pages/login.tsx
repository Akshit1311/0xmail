import React, { useEffect } from "react";
import { WidgetProps } from "@worldcoin/id";
import dynamic from "next/dynamic";
import { logintoud, logoutfromud } from "../helpers/ud/index";
import { verificationResponse } from "../helpers/worldCoin";
import { NextPage } from "next";
import { useWalletStore } from "../zustand";
import Image from "next/image";
import WalletButton from "../components/WalletButton/WalletButton";
import { useRouter } from "next/router";

const WorldIDWidget = dynamic<WidgetProps>(
  () => import("@worldcoin/id").then((mod) => mod.WorldIDWidget),
  { ssr: false }
);

const widgetProps: WidgetProps = {
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  actionId: process.env.NEXT_PUBLIC_ACTION_ID as string,
  signal: "my_signal",
  enableTelemetry: true,
  onSuccess: (verificationResponse) => console.log(verificationResponse),
  onError: (error) => console.error(error),
};

const Login: NextPage = () => {
  const setStore = useWalletStore((store) => store.setStore);
  const store = useWalletStore((store) => store);
  const router = useRouter();

  useEffect(() => {
    console.log({ store });
  }, [store]);

  return (
    <div className="grid place-items-center h-screen">
      <WalletButton />

      <div className="w-fit">
        <div className="text-center text-7xl font-bold my-6 bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text">
          0xMail
        </div>
        <button
          onClick={async () => {
            const result = await logintoud();
            if (result) {
              const { ud, walletAddress } = result;

              console.log({ ud, walletAddress });
              setStore({ walletAddress, loginMethod: "ud", domain: ud });
              router.push("/mail");
            }
          }}
          className="mb-4 text-blue-600 font-bold flex items-center border-2 px-4 py-2 w-full rounded-lg border-blue-600"
        >
          <Image
            src={"https://avatars.githubusercontent.com/u/36172275?s=280&v=4"}
            height="30"
            width="30"
            alt={"ud"}
            className="rounded-lg "
          />
          <div className="ml-2">Login with UD</div>
        </button>
        {/* <button onClick={logoutfromud}> Logout</button> */}
        <WorldIDWidget {...widgetProps} />
      </div>
    </div>
  );
};

export default Login;
