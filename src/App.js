import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";

import { Switch, Route } from "react-router-dom";
import Detail from "./components/Detail";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/detail" exact>
          <Detail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
