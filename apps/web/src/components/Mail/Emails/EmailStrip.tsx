import Image from "next/image";
import React from "react";
import Peg from "../../common/Peg";

interface IEmailStrip {
  username: string;
  url: string;
  onClick: () => void;
}

const EmailStrip: React.FC<IEmailStrip> = ({ username, url, onClick }) => {
  return (
    <div
      className="flex gap-2 my-4 px-2 py-2 rounded-lg hover:bg-slate-100 mr-2 cursor-pointer"
      onClick={onClick}
    >
      <Image
        src={url}
        height="50"
        width="50"
        alt={username}
        className="rounded-full"
      />
      <div className="flex flex-1 flex-col">
        <div className="font-medium">Jessica Koel</div>
        <div className="text-sm">sdhsdhds ...</div>
      </div>
      <div>
        <span>11:26</span>
        <Peg number={1} />
      </div>
    </div>
  );
};

export default EmailStrip;
