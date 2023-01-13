import * as React from "react";

const TriggerButton: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <button className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-4 mb-5 rounded-lg text-sky-700 text-lg hover:bg-gray-100">
      {children}
    </button>
  );
};

export default TriggerButton;
