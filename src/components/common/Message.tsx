import * as React from "react";

const Message: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
      <div>{children}</div>
    </div>
  );
};

export default Message;
