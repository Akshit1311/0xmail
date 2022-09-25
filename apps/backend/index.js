import express from "express";
// const sendEpnsNotif = require("./epns");
import { makeFileObjects } from "./filecoin.js";

const app = express();

// app.post("/epns/send-notif", async (req, res) => {
//   const { body } = req;

//   try {
//     const result = await sendEpnsNotif(body);

//     console.log({ result });

//     return res.status(200).send({ msg: "Success", data: result });
//   } catch (error) {
//     console.log({ error });
//     return res.status(500).send({ msg: "Internal Server Error", error });
//   }
// });

app.post("/filecoin", async (req, res) => {
  const { body } = req;

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
