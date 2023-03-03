import "./App.css";
import React, { useState } from "react";
import First from "./components/First";
import Second from "./components/Second";
function App(props) {
  const [dataFromSecondChild, setDataFromSecondChild] = useState("hy");

  const secondChildData = (data) => {
    setDataFromSecondChild(data);
  };

  return (
    <div>
      <First fromSecond={dataFromSecondChild} />
      <Second passData={secondChildData} />
    </div>
  );
}
export default App;
