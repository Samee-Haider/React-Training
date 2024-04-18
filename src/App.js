import { useState, useRef, useEffect } from "react";
import useCounter from "./CustomHooks/counterHook";

const App = () => {
  //useState hook
  const [switchBtn, setSwitchBtn] = useState(false);

  //custom hook
  const Counter = useCounter({ initialVal: 0 });

  //useRef hook
  const inputRef = useRef();
  const countRenders = useRef(0);

  //useEffect hook
  useEffect(() => {
    countRenders.current = countRenders.current + 1;
  }, [Counter]);

  const handleRef = () => {
    return inputRef.current.focus();
  };
  const handleSwitch = () => {
    setSwitchBtn(!switchBtn);
  };

  function handleAlertClick() {
    setTimeout(() => {
      alert("Input field value is: " + inputRef.current.value);
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
      {Counter}
      <br />
      <br />

      <br />
      <br />
      <button onClick={handleAlertClick}>Show alert</button>
    </div>
  );
};

export default App;
