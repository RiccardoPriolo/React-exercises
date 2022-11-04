import React from "react";

export const Sum = (props) => {
  const numbers = props.numbers;

  const sum = numbers.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );

  console.log(sum);
  return (
    <div>
      <div>Sum Component</div>
      <h1> {sum} </h1>
    </div>
  );
};
