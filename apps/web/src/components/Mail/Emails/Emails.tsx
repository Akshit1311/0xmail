import React from "react";
import EmailStrip from "./EmailStrip";

const Emails = ({
  isMailOpen,
  setIsMailOpen,
}: {
  isMailOpen: boolean;
  setIsMailOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={`bg-slate-100 flex ${
        isMailOpen ? "w-1/4" : " flex-1"
      } flex-col p-6 `}
    >
      <div className="flex bg-slate-300 items-center text-slate-600 pr-3 mb-4 rounded-lg">
        <input
          type="text"
          className="flex flex-1 w-full bg-transparent px-3 py-2 outline-none"
          placeholder="Search.."
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <div className="overflow-y-auto">
        {Array.from(Array(10)).map((_, i) => (
          <EmailStrip
            username={i.toString()}
            url={`https://randomuser.me/api/portraits/men/${i + 1}.jpg`}
            onClick={() => setIsMailOpen((prev) => !prev)}
          />
        ))}
      </div>
    </div>
  );
};

export default Emails;
