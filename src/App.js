import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PercentGraph from "./percent_graph/percent.graph";
import WriteForm from "./write_form/write_form";
import ReactSelectExample from "./react_select/react.select";
import Form from "./form/form";
import WithUseState from "./렌더링퍼포먼스_개선/useRef를사용한개선/기존";
import WithUseRef from "./렌더링퍼포먼스_개선/useRef를사용한개선/개선";
import Candy from "./렌더링퍼포먼스_개선/useCallback을 사용한 개선/candy";
import Antd from "./antd/antd";
import dataHandling from "./data_handling/data.handling";

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
                        <Route
                            path="/react_select"
                            render={ReactSelectExample}
                        />
                        <Route path="/form" render={Form} />
                        <Route
                            path="/rerender/performance"
                            render={WithUseState}
                            exact
                        />
                        <Route
                            path="/rerender/performance/improve"
                            render={WithUseRef}
                            exact
                        />
                        <Route
                            path="/rerender/performance/candy"
                            render={Candy}
                            exact
                        />
                        <Route path="/antd/input" render={Antd} exact />
                        <Route
                            path="/data/handling"
                            render={dataHandling}
                            exact
                        />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
