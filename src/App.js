import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./js/pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
