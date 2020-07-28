import React from "react";
class ClearBt extends React.Component {
  state = {
    ClearCompFlag: "clearComp"
  };
  handleClickClear = () => {
    this.props.ClearComp(this.state.ClearCompFlag);
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClickClear}>Clear Complete</button>
      </div>
    );
  }
}
export default ClearBt;
