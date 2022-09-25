import Image from "next/image";
import React from "react";
import Button from "../../common/Button";
import SidebarIcons from "../Sidebar/SidebarIcons";

const SingleMail = () => {
  return (
    <div className="flex flex-col flex-1 p-6">
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

      <div className="flex-1">
        Hi Akshit!
        <br />
        <br />
        Thank you for your contribution to the IPFS Community and for filling
        out the IPFS Scholar application form 😊 We&apos;re very excited to tell
        you that your application to the IPFS Scholar program has been accepted
        🥳 <br />
        <br />
        Regards,
        <br />
        Jane Doe
      </div>

      <textarea
        className="w-full bg-slate-100 outline-none p-4 rounded-lg"
        cols={30}
        rows={10}
        placeholder="Type your message here..."
      ></textarea>
      <div className="ml-auto mt-4">
        <Button>
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
