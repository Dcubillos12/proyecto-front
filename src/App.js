import { Route, BrowserRouter } from "react-router-dom";

import Home from "./views/home/Home.component";
import Detail from "./views/detail/Detail.component";
import Create from "./views/create/Create.component";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/home" component={Home} />
      <Route path="/home/:id" component={Detail} />
      <Route path="/create" component={Create} />
    </BrowserRouter>
  );
}
export default App;
