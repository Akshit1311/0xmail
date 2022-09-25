import Image from "next/image";
import React, { useState } from "react";
import { sendEpnsNotif } from "../../../helpers/epns";
import Button from "../../common/Button";
import WalletButton from "../../WalletButton/WalletButton";

const SingleMail = () => {
  const [epnsData, setEpnsData] = useState({
    recipient: "0xb69cf8f29A01c0DC43f56F96458368DfC020eB27",
    title: "Welcome to 0xMail",
    body: "This works prettyy well",
  });

  const handleClick = () => {
    const { recipient, title, body } = epnsData;

    sendEpnsNotif(recipient, title, body);
  };

  const onChange = (e: any) => {
    setEpnsData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="flex flex-col flex-1 p-6">
      <WalletButton />
      <div className="text-slate-400 font-medium">
        Today, 16th September 2022. 11:28
      </div>

      <div className="text-4xl">Meeting with Investors</div>

      <div className="my-4 flex gap-4 items-center">
        <Image
          src="https://randomuser.me/api/portraits/men/1.jpg"
          height="35"
          width="35"
          alt={"1"}
          className="rounded-full"
        />

        <div className="font-medium">John Doe</div>
      </div>

      <input
        type="text"
        name="title"
        placeholder="Type"
        value={epnsData.title}
        className="w-full bg-slate-100 outline-none p-4 rounded-lg"
        onChange={onChange}
      />
      <br />

      <textarea
        value={epnsData.body}
        name="body"
        className="w-full bg-slate-100 outline-none p-4 rounded-lg"
        cols={30}
        rows={10}
        placeholder="Type your message here..."
        onChange={onChange}
      />
      <div className="ml-auto mt-4">
        <Button onClick={handleClick}>
          Send Email&nbsp;
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default SingleMail;
