import React from "react";

const Peg = ({ number }: { number: number }) => {
  return (
    <div className="text-white aspect-square w-4 grid place-items-center rounded-md text-sm bg-blue-500">
      {number}
    </div>
  );
};

export default Peg;
