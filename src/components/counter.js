import React, { useState } from "react";

const Counter = ({ initialVal }) => {
  const [counter, setCounter] = useState(initialVal);
  console.log("counter re-render");
  const decreaseCount = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  const increaseCount = () => {
    setCounter(counter + 1);
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", columnGap: 15 }}>
      <button
        style={{ paddingLeft: 10, paddingRight: 10 }}
        onClick={decreaseCount}
      >
        -
      </button>
      <p>{counter}</p>
      <button
        style={{ paddingLeft: 10, paddingRight: 10 }}
        onClick={increaseCount}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
