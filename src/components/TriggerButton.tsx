import * as React from "react";

type Trigger = {
  func?: () => void;
  children?: React.ReactNode;
};

const TriggerButton: React.FC<Trigger> = ({ func, children }) => {
  return (
    <button
      className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-4 mb-5 rounded-lg text-sky-700 text-lg hover:bg-gray-100"
      onClick={func}
    >
      {children}
    </button>
  );
};

export default TriggerButton;
