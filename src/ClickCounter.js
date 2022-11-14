import React, { useState, useEffect } from "react";

const ClickCounter2 = (props, { initial = 0 }) => {
  let [count, setCount] = useState(initial);

  const CounterIncrement = () => {
    setCount(count + 1);
    console.log(count + 1)
  };

  useEffect(() => {
    props.onCounterChange(count);
  }, [count, props]);

  return (
    <div>
      
      <button onClick={CounterIncrement}>Click me: {count}</button>
    </div>
  );
};

export default ClickCounter2;
