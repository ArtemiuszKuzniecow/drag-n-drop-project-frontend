import * as React from "react";
import AddBlock from "./AddBlock";
import TriggerButton from "./TriggerButton";

const LeftBar = () => {
  return (
    <>
      <div className="flex flex-row h-full fixed p-10 z-50 bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        <div>
          <TriggerButton>Выберите следующий шаг</TriggerButton>
          <AddBlock />
        </div>
      </div>
    </>
  );
};

export default LeftBar;
