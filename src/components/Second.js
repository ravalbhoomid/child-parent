import React from "react";

const title = "Hello";
const Second = ({ passData }) => {
  const dataListener = () => {
    passData(title);
  };

  return <button onClick={dataListener}>Send</button>;
};

export default Second;
