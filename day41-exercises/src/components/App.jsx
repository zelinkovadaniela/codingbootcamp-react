import React from "react";
import Button from "./Button";
import Text from "./Text";

class App extends React.PureComponent {
  state = {
    showText: false,
    alertSomething: "something",
  };
  render() {
    return (
      <div className="App">
        <Button
          onClick={() => this.setState({ showText: !this.state.showText })}
        />
        <Button onClick={() => this.setState({ alertSomething: "anything" })} />
        {this.state.showText && <Text />}
        {console.log(this.state.alertSomething)}
      </div>
    );
  }
}

export default App;
