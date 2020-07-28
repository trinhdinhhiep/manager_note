import React from "react";
class ActiveBt extends React.Component {
  state = {
    ActFlag: "act"
  };
  handleClickAct = () => {
    this.props.Act(this.state.ActFlag);
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClickAct}>Active</button>
      </div>
    );
  }
}
export default ActiveBt;
