import React from 'react';

//import components
import Home from "./components/Home";
import Projects from "./components/Projects";

//router
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
