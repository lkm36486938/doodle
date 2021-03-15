import React, {useEffect} from 'react'
import "./App.css";

function App() {
  useEffect(() => {
    console.log('doodle!')
  }, [])
  
  return (
    <div className="App">
      <div className="container">
        <div className="balloon_01"></div>
        <div className="balloon_02"></div>
        <div className="balloon_03"></div>
      </div>
    </div>
  );
}

export default App;
