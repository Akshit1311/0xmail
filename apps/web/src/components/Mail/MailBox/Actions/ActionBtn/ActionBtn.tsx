import React from "react";
import Peg from "../../../../common/Peg";
import ActionBtnIcons from "./ActionBtnIcons";

interface IActionBtn {
  isActive?: boolean;
  icon: string;
  title: string;
  number: number;
  onClick: () => void;
}

const ActionBtn: React.FC<IActionBtn> = ({
  isActive,
  icon,
  title,
  number,
  onClick,
}) => {
  return (
    <div
      className={`flex justify-between ${
        isActive ? "text-blue-500" : "text-slate-700"
      } p-3 cursor-pointer font-medium`}
      onClick={onClick}
    >
      <div>{ActionBtnIcons[icon]}</div>
      <div className="flex-1 pr-32 pl-4">{title}</div>
      <Peg number={number} />
    </div>
  );
};

export default ActionBtn;
