import React, { useState } from "react";
import ActionBtn from "./ActionBtn/ActionBtn";
import NewMessageBtn from "./NewMessageBtn";

interface IActionBtnsData {
  [key: string]: {
    title: string;
    number: number;
  };
}

const Actions = () => {
  const [activeBtn, setActiveBtn] = useState("inbox");

  const ActionBtnsData: IActionBtnsData = {
    inbox: {
      title: "Inbox",
      number: 1,
    },
    sent: {
      title: "Sent Emails",
      number: 1,
    },
    favourite: {
      title: "Favourite",
      number: 1,
    },
    draft: {
      title: "Draft",
      number: 1,
    },
    deleted: {
      title: "Deleted",
      number: 1,
    },
  };

  return (
    <div className="flex items-center flex-1 w-full flex-col">
      <NewMessageBtn />
      <div className="flex flex-1 flex-col w-full p-2">
        {Object.keys(ActionBtnsData).map((key) => (
          <ActionBtn
            key={key}
            icon={key}
            title={ActionBtnsData[key].title}
            number={ActionBtnsData[key].number}
            isActive={key === activeBtn}
            onClick={() => setActiveBtn(key)}
          />
        ))}
      </div>
    </div>
  );
};

export default Actions;
