//import React from "react";

const First = ({ fromSecond }) => {
  console.log(fromSecond);
  return (
    <div>
      <p>{fromSecond}</p>
    </div>
  );
};

export default First;
