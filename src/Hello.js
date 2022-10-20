import React from "react";
import Message from "./Message";

class Hello extends React.Component {
  render() {
    return (
      <>
        <h1>Hello, world! </h1>
        <p>
          <Message />
        </p>
      </>
    );
  }
}

export default Hello;
