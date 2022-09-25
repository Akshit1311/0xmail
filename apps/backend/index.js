import express from "express";
import { targetNotification } from "./epns.js";
// const sendEpnsNotif = require("./epns");
import { makeFileObjects } from "./filecoin.js";
import cors from "cors";

const app = express();
app.use(cors());

app.post("/epns", async (req, res) => {
  const { query } = req;
  const { recipient, title, body } = query;

  if (!recipient || !title || !body)
    return res.status(400).send({ msg: "Wrong Params" });
  try {
    const result = await targetNotification(recipient, title, body);
    console.log({ result });
    return res.status(200).send({ msg: "Success", data: result });
  } catch (error) {
    console.log({ error });
    return res.status(500).send({ msg: "Internal Server Error", error });
  }
});

app.post("/filecoin", async (req, res) => {
  const { body } = req;
  console.log({ filBody: body });

  try {
    const result = await makeFileObjects();

    console.log({ result });

    return res.status(200).send({ msg: "Success", data: result });
  } catch (error) {
    console.log({ error });
    return res.status(500).send({ msg: "Internal Server Error", error });
  }
});

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
