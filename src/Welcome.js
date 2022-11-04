import Age from "./Age";

import React from "react";

function Welcome(props) {
  return (
    <div className="welcome">
      <p>Welcome, {props.name}</p>
      {!!props.age && props.age < 65 && props.name === "John" && (
        <Age age={props.age} />
      )}
    </div>
  );
}

// Welcome.defaultProps = {
//   name: "John",
// };

export default Welcome;
