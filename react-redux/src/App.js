import logo from "./logo.svg";
import "./App.css";
import CakeContainer from "./Components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeContainers from "./Components/HooksCakeContainers";
import IceCreamContainer from "./Components/iceCreamContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>Cake Container</h1>
          <CakeContainer />
          <br />
          <br />
          <h1>Hooks Cake Container</h1>
          <HooksCakeContainers />
          <br />
          <br />
          <h1>Ice Cream Container</h1>
          <IceCreamContainer />
        </header>
      </div>
    </Provider>
  );
}

export default App;
