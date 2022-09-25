import React, { useEffect } from "react";
import { WidgetProps } from "@worldcoin/id";
import dynamic from "next/dynamic";
import { logintoud, logoutfromud } from "../../helpers/ud/index";
import { verificationResponse } from "../../helpers/worldCoin";
import { NextPage } from "next";
import { useWalletStore } from "../../zustand";
import Image from "next/image";
import WalletButton from "../../components/WalletButton/WalletButton";
import { useRouter } from "next/router";

const WorldIDWidget: any = dynamic<WidgetProps>(
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

const Login = () => {
  const setStore = useWalletStore((store: any) => store.setStore);
  const store = useWalletStore((store) => store);
  const router = useRouter();

  useEffect(() => {
    console.log({ store });
  }, [store]);

  return (
    <div className="w-fit mx-auto">
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
  );
};

export default Login;
