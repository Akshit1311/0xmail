import React from "react";
import MailBox from "../components/Mail/MailBox/MailBox";
import Sidebar from "../components/Mail/Sidebar/Sidebar";

const Mail = () => {
  return (
    <div className="bg-white h-screen flex">
      <Sidebar />
      <MailBox />
    </div>
  );
};

export default Mail;
