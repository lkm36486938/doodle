import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PercentGraph from "./percent_graph/percent.graph";
import WriteForm from "./write_form/write_form";
import ReactSelectExample from './react_select/react.select'
import Form from "./form/form";

function App() {
  useEffect(() => {
    console.log("doodle!");
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route path="/percent_graph" render={PercentGraph} />
            <Route path="/write_form" render={WriteForm} />
            <Route path="/react_select" render={ReactSelectExample} />
            <Route path="/form" render={Form} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
