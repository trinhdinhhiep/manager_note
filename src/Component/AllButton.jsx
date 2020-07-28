import React from "react";
class AllButton extends React.Component {
  state = {
    allFlag: "all"
  };
  handleClickAll = () => {
    this.props.All(this.state.allFlag);
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClickAll}>All</button>
      </div>
    );
  }
}
export default AllButton;
