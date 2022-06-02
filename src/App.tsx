import { Home } from "./pages/Home";
import ReactModal from "react-modal";
import { GlobalStyle } from "./styles/global";

ReactModal.setAppElement("#root");

function App() {
  return (
    <>
      <Home />
      <GlobalStyle />
    </>
  );
}

export default App;
