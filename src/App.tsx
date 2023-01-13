import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import LeftBar from "./components/LeftBar";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div className="h-full">
      <LeftBar />
      <div className="ml-96">
        <DndProvider backend={HTML5Backend}>
          <Wrapper />
        </DndProvider>
      </div>
    </div>
  );
}

export default App;
