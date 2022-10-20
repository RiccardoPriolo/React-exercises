import React from "react";
import Age from "./Age";

class Welcome extends React.Component {
  render() {
    return (
      <>
        <p>Welcome, {this.props.name}</p>
        <Age age={50} />
      </>
    );
  }
}

Welcome.defaultProps = {
  name: <strong>Alfio</strong>,
};

export default Welcome;
