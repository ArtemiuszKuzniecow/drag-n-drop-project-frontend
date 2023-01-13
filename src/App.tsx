import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Field from "./components/Field";
import LeftBar from "./components/LeftBar";

function App() {
  return (
    <div className="h-full">
      <LeftBar />
      <div className="ml-96">
        <DndProvider backend={HTML5Backend}>
          <Field />
        </DndProvider>
      </div>
    </div>
  );
}

export default App;
