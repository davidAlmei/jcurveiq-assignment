import ResearchWorkspace from "./pages/ResearchWorkspace";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <ResearchWorkspace />
    </Provider>
  );
}

export default App;
