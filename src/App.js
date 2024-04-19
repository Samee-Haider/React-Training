import { useRef, useEffect, useState } from "react";
import Counter from "./components/counter";
import SwitchBtn from "./components/switchBtn";
const App = () => {
  //useState hook
  const [inputField, setInputField] = useState("");
  //useRef hook
  const inputRef = useRef();
  const countRenders = useRef(0);

  //useEffect hook
  useEffect(() => {
    countRenders.current = countRenders.current + 1;
  });
  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputField(value);
  };
  const handleRef = () => {
    return inputRef.current.focus();
  };

  function handleAlertClick() {
    setTimeout(() => {
      alert("Input field value is: " + inputRef.current.value);
    }, 3000);
  }
  return (
    <div style={{ marginLeft: 20 }}>
      <h1 style={{ marginBottom: 40 }}>UseState Hook Examples</h1>

      <h1 style={{ marginBottom: 60 }}>Render Count: {countRenders.current}</h1>
      <SwitchBtn />
      <input
        type="text"
        ref={inputRef}
        value={inputField}
        onChange={handleInputChange}
      ></input>
      <button style={{ marginBottom: 40 }} onClick={handleRef}>
        Focus Input Button
      </button>

      <h2> Counter Example :p</h2>
      <div style={{ marginBottom: 40 }}>
        <Counter style={{ marginBottom: 40 }} initialVal={0} />
      </div>

      <h2> Another Counter Example :x</h2>
      <div style={{ marginBottom: 40 }}>
        <Counter style={{ marginBottom: 40 }} initialVal={0} />
      </div>

      <button onClick={handleAlertClick}>Show alert</button>
    </div>
  );
};

export default App;
