import { BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Main from "./Routes/Main";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Main />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
