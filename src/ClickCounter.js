import React, { useState } from "react";

const ClickCounter2 = () => {
  const [count, setCount] = useState(0);

  const CounterIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={CounterIncrement}>Click me: {count}</button>
    </div>
  );
};

export default ClickCounter2;
