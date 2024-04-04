import "./App.css";
import Todolist from "./component/Todolist";
import Tododone from "./component/tododone";
import Todonotdone from "./component/todonotdonelist";
import { SharedArrayProvider } from "./context/context";
function App() {
  return (
    <div id="wrapper">
      <div className="tasklist">
        <SharedArrayProvider>
          <Tododone />
          <Todolist />
          <Todonotdone />
        </SharedArrayProvider>
      </div>
    </div>
  );
}

export default App;
