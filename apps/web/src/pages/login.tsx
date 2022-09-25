import React from "react";
import { WidgetProps } from "@worldcoin/id";
import dynamic from "next/dynamic";
import { logintoud, logoutfromud } from "../helpers/ud/index";
import { verificationResponse } from "../helpers/worldCoin";
import { NextPage } from "next";
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
const Login: NextPage = () => (
  <div>
    <button onClick={logintoud}> Login</button>
    <button onClick={logoutfromud}> Logout</button>
    <WorldIDWidget {...widgetProps} />
  </div>
);

export default Login;
