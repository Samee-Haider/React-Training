import React, { useState } from "react";

function SwitchBtn() {
  const [switchBtn, setSwitchBtn] = useState(false);
  const handleSwitch = () => {
    setSwitchBtn(!switchBtn);
  };

  return (
    <div>
      <h2> A Random Switch Button </h2>
      <h3 style={{ marginBottom: 20 }}>
        Switch: <span>{switchBtn ? "On" : "Off"}</span>
      </h3>
      <div style={{ marginBottom: 40 }}>
        <button onClick={handleSwitch}>Switch Button</button>
      </div>
    </div>
  );
}

export default SwitchBtn;
