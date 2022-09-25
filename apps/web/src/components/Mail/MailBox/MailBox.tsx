import React, { useState } from "react";
import BackButton from "../../common/BackButton";
import Emails from "../Emails/Emails";
import SingleMail from "../SingleMail/SingleMail";
import Actions from "./Actions/Actions";

const MailBox = () => {
  const [isMailOpen, setIsMailOpen] = useState(true);

  return (
    <div className="flex flex-1">
      <div className="p-6 ">
        <div className="flex items-center pb-6 border-b-2 border-">
          <BackButton />
          <div className="font-medium text-2xl ml-4">0xMail</div>
        </div>
        <Actions />
      </div>
      <Emails isMailOpen={isMailOpen} setIsMailOpen={setIsMailOpen} />
      {isMailOpen && <SingleMail />}
    </div>
  );
};

export default MailBox;
