import React from "react";
import "./App.css"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Page4 from "./pages/page4";
import Page5 from "./pages/page5";

function App() {
  return (
    <div>
    <Router>
      <Switch>
        <Route path="/" exact component={Page1} />
        <Route path="/personagens" component={Page2} />
        <Route path="/filmes" exact component={Page3} />
        <Route path="/planetas" exact component={Page4} />
        <Route path="/naves" exact component={Page5} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
