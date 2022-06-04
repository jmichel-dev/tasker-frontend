import { Home } from "./pages/Home";
import ReactModal from "react-modal";
import { GlobalStyle } from "./styles/global";
import { TaskProvider } from "./context/TaskContext";

ReactModal.setAppElement("#root");

function App() {
  return (
    <TaskProvider>
      <Home />
      <GlobalStyle />
    </TaskProvider>
  );
}

export default App;
