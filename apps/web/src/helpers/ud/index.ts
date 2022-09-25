/* eslint-disable turbo/no-undeclared-env-vars */
import UAuth from "@uauth/js";

const uauth = new UAuth({
  clientID: process.env.NEXT_PUBLIC_CLIENTID as string,
  redirectUri:
    process.env.NODE_ENV === "production"
      ? "https://0xmail.vercel.app/"
      : "http://localhost:3000",
  scope: "openid wallet",
});

export const logintoud = async () => {
  try {
    const { idToken } = await uauth.loginWithPopup();

    console.log({ idToken });

    return {
      ud: idToken.sub,
      walletAddress: idToken.wallet_address,
    };
  } catch (error) {
    console.error(error);
  }
};
export const logoutfromud = async () => {
  await uauth.logout();
  console.log("Logged out with Unstoppable");
};
