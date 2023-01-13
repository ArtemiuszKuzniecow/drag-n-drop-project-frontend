import * as React from "react";
import Button from "./common/Button";
import MessengerIcon from "./MessengerIcon";
import YoutubeIcon from "./YoutubeIcon";

const AddBlock = () => {
  return (
    <ul>
      <li className="pb-4">
        <Button>
          <MessengerIcon />
          Добваить текст
        </Button>
      </li>
      <li>
        <Button>
          <YoutubeIcon />
          Добавить видео YouTube
        </Button>
      </li>
    </ul>
  );
};

export default AddBlock;
