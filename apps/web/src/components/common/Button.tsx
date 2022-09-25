import React from "react";

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-blue-500 px-6 py-3 text-white flex items-center rounded-lg cursor-pointer hover:opacity-75">
      {children}
    </div>
  );
};

export default Button;
