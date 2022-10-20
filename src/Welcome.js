import React from "react";
import Age from "./Age";

class Welcome extends React.Component {
  render() {
    return (
      <>
        <p>Welcome, {this.props.name}</p>
        {!!this.props.age && this.props.age > 18 && this.props.age < 65 && (
          <Age age={this.props.age} />
        )}
      </>
    );
  }
}

Welcome.defaultProps = {
  name: <strong>Alfio</strong>,
};

export default Welcome;
