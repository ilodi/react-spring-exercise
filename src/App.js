import React, { useState } from "react";
import "./index.css";
import Estructura from "./estructura/Estructura";
import Springs from "./springs";
import Login from "./login";
function App() {
  const [move, setMove] = useState(false);
  const clickHandler = () => {
    setMove((lastState) => !lastState);
  };
  return (
    <div className="App">
      {/* <header className="App-header">
        <Estructura isMove={move} />
       
      </header> */}
      <button onClick={clickHandler} className="button">
        Click
      </button>
      <Springs isMove={move} />
    </div>
  );
}

export default App;
