import React from "react";

interface IBackButton {
  onClick?: () => void;
}

const BackButton: React.FC<IBackButton> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-slate-200 grid place-items-center w-fit px-4 py-3 rounded-lg cursor-pointer"
    >
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
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
    </div>
  );
};

export default BackButton;
