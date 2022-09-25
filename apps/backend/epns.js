import * as EpnsAPI from "@epnsproject/sdk-restapi";
import * as ethers from "ethers";
import * as dotenv from "dotenv";
dotenv.config();

// eslint-disable-next-line turbo/no-undeclared-env-vars
const PK = process.env.PVT_KEY; // channel private key
console.log({ PK });
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);
const logoIpfsUrl =
  "https://gateway.ipfs.io/ipfs/bafybeibblygkoqe4qoe2g3d6ysjdxzyxgk2u7bhh42buxwjhx45y3l34gu/QmZjBgdgkJkTLTPW7n7WnYp93Sfv5eoZBMjRsBhr82stED";

export const targetNotification = async (recipient, title, body) => {
  try {
    // apiResponse?.status === 204, if sent successfully!
    const apiResponse = await EpnsAPI.payloads.sendNotification({
      signer,
      type: 3, // target
      identityType: 2, // direct payload
      notification: {
        title,
        body,
      },
      payload: {
        title,
        body,
        cta: "0xmail.vercel.app",
        img: logoIpfsUrl,
      },
      recipients: `eip155:42:${recipient}`, // recipient address
      channel: "eip155:42:0x7A80347b694740Db194512b58FFF0ECBfa98f670", // your channel address
      env: "staging",
    });
    // apiResponse?.status === 204, if sent successfully!
    console.log("API repsonse: ", { apiResponse });
  } catch (err) {
    console.error("Error: ", { err });
  }
};

export const broadcastNotification = async (title, body) => {
  try {
    // apiResponse?.status === 204, if sent successfully!
    // apiResponse?.status === 204, if sent successfully!
    const apiResponse = await EpnsAPI.payloads.sendNotification({
      signer,
      type: 1, // broadcast
      identityType: 2, // direct payload
      notification: {
        title,
        body,
      },
      payload: {
        title,
        body,
        cta: "0xmail.vercel.app",
        img: logoIpfsUrl,
      },
      channel: "eip155:42:0x7A80347b694740Db194512b58FFF0ECBfa98f670", // your channel address
      env: "staging",
    });
    // apiResponse?.status === 204, if sent successfully!
    console.log("API repsonse: ", { apiResponse });
  } catch (err) {
    console.error("Error: ", { err });
  }
};

// sendNotification(
//   "0xb69cf8f29A01c0DC43f56F96458368DfC020eB27",
//   `target param notification TItTLE:`,
//   `target param notification BODY`
// );
// broadcastNotification();
