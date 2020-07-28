import React from "react";
class CompBt extends React.Component {
  state = {
    Compflag: "comp"
  };
  handleClickComp = () => {
    this.props.Complete(this.state.Compflag);
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClickComp}>Complete</button>
      </div>
    );
  }
}
export default CompBt;
