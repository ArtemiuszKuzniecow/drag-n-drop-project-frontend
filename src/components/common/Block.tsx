import * as React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../ItemTypes";

type Block = {
  id: string;
  left: number;
  top: number;
  children?: React.ReactNode;
};

const Block = ({ id, left, top, children }: Block) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.BLOCK,
      item: { id, left, top },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top]
  );
  return (
    <div
      ref={drag}
      className="border-2 border-green-400 w-1/6 rounded-lg text-center py-4 grabbable absolute"
      data-testid="block"
      style={{ left, top }}
    >
      {children}
    </div>
  );
};

export default Block;
