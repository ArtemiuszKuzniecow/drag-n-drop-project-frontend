import * as React from "react";
import AddBlock from "./AddBlock";
import TriggerButton from "./TriggerButton";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getContentSelector } from "../store/selectors";
import { mainSlice } from "../store/slice";

const LeftBar = () => {
  const dispatch = useDispatch();
  const content = useSelector(getContentSelector());
  const [blocks, setBlocks] = React.useState(content);
  React.useEffect(() => {
    setBlocks(content);
  }, [content]);

  const handleAddBlock = () => {
    const blockId = Object.keys(blocks).length;
    const contentArray = Object.values(blocks);
    const currentBlock =
      contentArray.find((b) => Number(b.id) === blockId - 1) || contentArray[0];

    const value =
      blockId === 1
        ? {
            [blockId]: {
              top: contentArray[0].top + 100,
              left: contentArray[0].left + 100,
              id: blockId,
              data: `${blockId}`,
            },
          }
        : {
            [blockId]: {
              top: currentBlock?.top + 100,
              left: currentBlock?.left + 100,
              id: blockId,
              data: `${blockId}`,
            },
          };
    dispatch(mainSlice.actions.addBlock(value));
  };
  return (
    <>
      <div className="flex flex-row h-full fixed p-10 z-50 bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        <div>
          <TriggerButton func={handleAddBlock}>
            Выберите следующий шаг
          </TriggerButton>
          <AddBlock />
        </div>
      </div>
    </>
  );
};

export default LeftBar;
