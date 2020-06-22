import React from "react";

class Button extends React.PureComponent {
  render() {
    const { onClick } = this.props;

    return <button onClick={() => onClick()}>Click me!</button>;
  }
}

export default Button;
