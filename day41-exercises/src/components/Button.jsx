import React from "react";

class Button extends React.PureComponent {
  render() {
    const { onClick, text, onMove } = this.props;

    return <button onClick={() => this.props.onClick()}>{text}</button>;
  }
}

export default Button;
