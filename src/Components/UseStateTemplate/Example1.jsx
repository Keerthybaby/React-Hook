import React, { useState } from "react";

const Example1 = () => {
  const [name, setName] = useState("Debug Media");
  const resetName = () => {
    setName("");
  };

  return (
    <div>
      <h1>Welcome {name}</h1>
      <button onClick={resetName}>Reset</button>
    </div>
  );
};

export default Example1;
