import React from "react";
import { Checkbox, Button } from "antd";

import { CloseOutlined } from "@ant-design/icons";

class List extends React.Component {
  state = {
    check: "done",
    doubleClick: "off",
    dataFix: ""
  };
  handleChangeCheck = event => {
    if (this.state.check === "done") {
      this.setState({ check: "todo" });
    } else if (this.state.check === "todo") {
      this.setState({ check: "done" });
    }
    //console.log("da check", this.state.check, this.props.dataList);
  };
  handleClickCheck = () => {
    this.props.Checked(this.state.check, this.props.dataList);
  };
  handleClickDel = () => {
    //console.log(this.props.dataList)
    this.props.Del(this.props.dataList);
  };
  displayLabel = () => {
    const temp = this.props.CheckId;
    if (temp === "done") {
      return <strike>{this.props.dataList}</strike>;
    }
    return this.props.dataList;
  };
  handleDoubleClick = () => {
    this.setState({ doubleClick: "on" });
  };
  _getDisplayLabel = () => {
    const temp = this.state.doubleClick;
    if (temp === "on") {
      return (
        <div>
          <input
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            value={this.state.dataFix}
          />
        </div>
      );
    } else {
      return <div>{this.displayLabel()}</div>;
    }
  };
  handleKeyDown = e => {
    if (e.key === "Enter") {
      this.props.handleDataFix(this.props.dataList, this.state.dataFix);
      this.setState({ doubleClick: "off" });
    }
  };
  handleChange = event => {
    this.setState({ dataFix: event.target.value });
    //console.log("nhan data khi nhap", this.state.dataInput);
  };
  render() {
    return (
      <div className="list">
        <Checkbox
          onChange={this.handleChangeCheck}
          onClick={this.handleClickCheck}
          checked={this.props.CheckId === "done"}
        />

        <label onDoubleClick={this.handleDoubleClick}>
          {this._getDisplayLabel()}
        </label>

        <Button
          type="danger"
          onClick={this.handleClickDel}
          shape="circle"
          icon={<CloseOutlined />}
        />
      </div>
    );
  }
}
export default List;
