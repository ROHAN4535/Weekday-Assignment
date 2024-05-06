import Jobs from "./components/jobs-pages/Jobs";
import { Provider } from "react-redux";
import store from "./components/store/store";

function App() {
  return (
    <Provider store={store}>
      <Jobs />
    </Provider>
  );
}

export default App;
