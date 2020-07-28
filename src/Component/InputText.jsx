import React from "react";
import { Input } from "antd";

class InputText extends React.Component {
  state = {
    dataInput: ""
  };
  handleChange = event => {
    this.setState({ dataInput: event.target.value });
    //console.log("nhan data khi nhap", this.state.dataInput);
  };
  handleKeyDown = e => {
    if (e.key === "Enter") {
      this.props.handleData(this.state.dataInput);
      this.setState({ dataInput: "" });
    }
  };
  render() {
    return (
      <div>
        <Input
          placeholder="Enter Text"
          onKeyDown={this.handleKeyDown}
          type="text"
          value={this.state.dataInput}
          onChange={this.handleChange}
          className="text"
        />
      </div>
    );
  }
}
export default InputText;
