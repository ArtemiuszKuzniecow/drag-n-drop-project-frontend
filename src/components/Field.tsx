import * as React from "react";
import Block from "./common/Block";
import update from "immutability-helper";
import { useDrop, XYCoord } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import { BlockItem } from "./interfaces";
import { useSelector } from "react-redux";
import { getContentSelector } from "../store/selectors";
import { useDispatch } from "react-redux/es/exports";
import { mainReducer, mainSlice } from "../store/slice";

const Field = () => {
  const dispatch = useDispatch();
  const content = useSelector(getContentSelector());
  const [blocks, setBlocks] = React.useState(content);
  const [hasMoved, setHasMoved] = React.useState(false);

  React.useEffect(() => {
    setBlocks(content);
  }, [content]);

  React.useEffect(() => {
    dispatch(mainSlice.actions.moveBlocks(blocks));
    setHasMoved(false);
  }, [hasMoved]);

  const moveBlocks = React.useCallback(
    (id: string, left: number, top: number) => {
      setBlocks(
        update(blocks, {
          [id]: {
            $merge: { left, top },
          },
        })
      );
      setHasMoved(true);
    },
    [blocks, setBlocks]
  );

  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.BLOCK,
      drop(item: BlockItem, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset() as XYCoord;
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);
        moveBlocks(item.id, left, top);
        return undefined;
      },
    }),
    [moveBlocks]
  );

  return (
    <div
      ref={drop}
      className="border-2 border-gray-500 w-full min-h-screen relative p-1"
    >
      {Object.keys(blocks).map((b) => {
        const { left, top, data } = blocks[b as keyof typeof blocks];
        return (
          <Block key={b} id={b} left={left} top={top}>
            {data}
          </Block>
        );
      })}
    </div>
  );
};

export default Field;
