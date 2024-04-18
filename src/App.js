import { useState, useRef, useEffect } from "react";

const App = () => {
  //useState hook
  const [switchBtn, setSwitchBtn] = useState(false);
  const [counter, setCounter] = useState(0);

  //useRef hook
  const inputRef = useRef();
  const countRenders = useRef(0);

  //useEffect hook
  useEffect(() => {
    countRenders.current = countRenders.current + 1;
  }, [counter]);

  const handleRef = () => {
    return inputRef.current.focus();
  };
  const handleSwitch = () => {
    setSwitchBtn(!switchBtn);
  };

  const decreaseCount = () => {
    if (counter > 0) setCounter(counter - 1);
  };
  const increaseCount = () => {
    setCounter(counter + 1);
  };

  function handleAlertClick() {
    setTimeout(() => {
      alert("You clicked on: " + counter);
    }, 3000);
  }
  return (
    <div style={{ marginLeft: 20 }}>
      <h1>UseState Hook Examples</h1>
      <br />
      <br />
      <h2> A Random Switch Button </h2>
      <h3>
        Switch: <span>{switchBtn ? "On" : "Off"}</span>
      </h3>

      <button onClick={handleSwitch}>Switch Button</button>
      <br />
      <br />
      <input type="text" ref={inputRef}></input>
      <button onClick={handleRef}>Ref Button</button>
      <h1>Render Count: {countRenders.current}</h1>
      <br />
      <br />

      <h2> Counter Example :p</h2>
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
      <br />
      <br />
      <button onClick={() => setCounter(0)}>Reset Counter</button>
      <br />
      <br />
      <button onClick={handleAlertClick}>Show alert</button>
    </div>
  );
};

export default App;
