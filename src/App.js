import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    console.log("doodle!");
  }, []);

  const _onFocus = e => {
    e.target.classList.add("onFocus");
  };

  const _onBlur = e => {
    e.target.classList.remove("onFocus");
  };

  return (
    <div className="App">
      <div className="container">
        <input type="text" className="input" />
        <input type="text" className="input anotherColor" />
        <input type="text" className="input" />
        <input type="text" className="input anotherColor" />
        <input type="text" className="input" />
        <hr />

        {/* 2번째방법. event handler 사용 */}
        <input
          type="text"
          className="event"
          onFocus={e => e.target.classList.add("onFocus")}
          onBlur={e => e.target.classList.remove("onFocus")}
        />
        <input
          type="text"
          className="event"
          onFocus={_onFocus}
          onBlur={_onBlur}
        />
        <input type="text" className="event" />
        <input type="text" className="event" />
        <input type="text" className="event" />
      </div>
    </div>
  );
}

export default App;
