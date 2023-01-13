import * as React from "react";

const Button: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <button className="bg-gray-200 hover:bg-gray-300 text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
      <span className="flex items-center gap-3">{children}</span>
    </button>
  );
};

export default Button;
