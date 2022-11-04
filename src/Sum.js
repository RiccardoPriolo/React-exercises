import React from "react";

export const Sum = (props) => {
  
    const { numbers = [ 1, 2, 3, 4] } = props;

  let sum = numbers.reduce(
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

/* ho renderizzato in App oltre ad aver fatto un clg di sum  */