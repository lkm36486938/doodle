import React, {useEffect} from 'react'
import "./App.css";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import PercentGraph from './percent_graph/percent.graph'

function App() {
  useEffect(() => {
    console.log('doodle!')
  }, [])
  
  return (
    
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/percent_graph" render={PercentGraph} />
        </Switch>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
