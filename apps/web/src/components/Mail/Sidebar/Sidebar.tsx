import React from "react";
import SidebarIcons from "./SidebarIcons";
import { ESidebarIcon } from "./types";

const Sidebar = () => {
  const iconsData: { [key in ESidebarIcon]: () => void } = {
    [ESidebarIcon.INBOX]: () => {},
    [ESidebarIcon.SENT]: () => {},
    [ESidebarIcon.ARCHIVE]: () => {},
    [ESidebarIcon.SETTINGS]: () => {},
  };

  return (
    <div className="bg-slate-100 p-4 flex flex-col justify-between border-r-2 border-slate-200">
      <div></div>
      <div className="flex items-center flex-col gap-6">
        {Object.keys(iconsData).map((icon) => (
          <div className="mx-auto cursor-pointer  hover:bg-slate-200 p-3 aspect-square rounded-lg ">
            {SidebarIcons[icon as ESidebarIcon]}
          </div>
        ))}
      </div>

      <div className="rounded-full bg-slate-500 m-1 aspect-square"></div>
    </div>
  );
};

export default Sidebar;
