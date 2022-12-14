import React from "react";
import Age from "./Age";

class Welcome extends React.Component {
  render() {
    return (
      <>
        <div className="welcome">
          <p>Welcome, {this.props.name}</p>
          {!!this.props.age &&
            // this.props.age > 18 &&
            this.props.age < 65 &&
            this.props.name === "John" && <Age age={this.props.age} />}
        </div>
      </>
    );
  }
}

// Welcome.defaultProps = {
//   name: "John",
// };

export default Welcome;
