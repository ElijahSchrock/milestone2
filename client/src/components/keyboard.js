import React, { Component } from "react";
import { render } from "react-dom";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import "../App.css";

function WinKey() {
  class App extends Component {
    state = {
      layoutName: "default",
      input: "",
    };

    onChange = input => {
      this.setState({ input });
      console.log("Input changed", input);
    };

    onKeyPress = button => {
      console.log("Button pressed", button);

      /**
       * If you want to handle the shift and caps lock buttons
       */
      if (button === "{shift}" || button === "{lock}") this.handleShift();
    };

    handleShift = () => {
      const layoutName = this.state.layoutName;

      this.setState({
        layoutName: layoutName === "default" ? "shift" : "default",
      });
    };

    onChangeInput = event => {
      const input = event.target.value;
      this.setState({ input });
      this.keyboard.setInput(input);
    };

    render() {
      return (
        <div>
          <input
            value={this.state.input}
            placeholder={"Guess the logo"}
            onChange={this.onChangeInput}
          />
          <Keyboard
            keyboardRef={r => (this.keyboard = r)}
            layoutName={this.state.layoutName}
            onChange={this.onChange}
            onKeyPress={this.onKeyPress}
          />
        </div>
      );
    }
  }

  return render(<App />, document.getElementById("root"));
}

export default WinKey;