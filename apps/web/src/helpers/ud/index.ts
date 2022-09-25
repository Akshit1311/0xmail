import UAuth from "@uauth/js";

const uauth = new UAuth({
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  clientID: process.env.NEXT_PUBLIC_CLIENTID as string,
  redirectUri: "http://localhost:3000",
  scope: "openid wallet",
});

export const logintoud = async () => {
  try {
    const authorization = await uauth.loginWithPopup();

    console.log(authorization);
  } catch (error) {
    console.error(error);
  }
};
export const logoutfromud = async () => {
  await uauth.logout();
  console.log("Logged out with Unstoppable");
};
