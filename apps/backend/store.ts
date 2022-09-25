import { File } from "web3.storage";
import { Web3Storage } from "web3.storage";
import * as dotenv from "dotenv";

import express from "express";
import fileUpload from "express-fileupload";
dotenv.config();

const app = express();
app.use(fileUpload());

function getAccessToken() {
  return process.env.NEXT_PUBLIC_WEBSTORAGE;
}
function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() });
}

export const store = async (req, res) => {
  const obj = {
    to: req.body.to,
    from: req.body.from,
    subject: req.body.subject,
    body: req.body.body,
    attachments: req.body.attachments,
  };
  console.log(obj);
  const blob = new Blob([JSON.stringify(obj)], { type: "application/json" });
  const files = [new File([blob], "email.json")];
  console.log({ files });

  try {
    const output = await storeFiles(files);
    return res.status(200).json({ cid: output });
  } catch (error) {
    console.log({ error });
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};
async function storeFiles(files) {
  const client = makeStorageClient();
  const cid = await client.put(files);
  console.log("stored files with cid:", cid);
  return cid;
}
