import React from "react";

class Text extends React.PureComponent {
  render() {
    const { text, number } = this.props;
    return <p>{this.props.text}</p>;
  }
}

export default Text;
