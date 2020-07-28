import React from "react";
import InputText from "./Component/InputText";
import List from "./Component/List";
import CompBt from "./Component/CompleteButton";
import ClearBt from "./Component/ClearButton";
import AllBt from "./Component/AllButton";
import ActBt from "./Component/ActiveButton";
import ItemLeft from "./Component/ItemLeft";
class Main extends React.Component {
  state = {
    data: [
      { item: "Eat Cake", status: "todo" },
      { item: "Eat Egg", status: "todo" },
      { item: "Eat Egg", status: "todo" },
      { item: "Eat Egg", status: "todo" }
    ],
    filter: "all"
  };
  handleDataMain = datafromInput => {
    const temp = { item: datafromInput, status: "todo" };
    const resul = [...this.state.data, temp];
    this.setState({ data: resul });
  };
  handleCheck = (dataCheck, dataList) => {
    const temp = this.state.data.map((x, index) => {
      if (x.item === dataList) {
        x = { item: dataList, status: dataCheck };
      }
      return x;
    });
    //console.log(temp)
    //this.setState({ data: temp })
    this.setState({ data: temp }, () => console.log(this.state.data));
  };
  handleItemLeft = () => {
    const temp = this.state.data.filter(x => x.status === "todo");
    const resul = temp.length;
    return resul;
  };
  handleDel = dataList => {
    const temp = this.state.data.filter(x => x.item !== dataList);
    //console.log(temp);
    this.setState({ data: temp });
  };

  handleAll = () => this.setState({ filter: "all" });
  handleAct = () => this.setState({ filter: "todo" });
  handleComp = () => this.setState({ filter: "done" });

  handleClearComp = () => {
    const temp = this.state.data.filter(x => x.status !== "done");
    this.setState({ data: temp });
  };

  _getFilterData = () => {
    let temp;
    if (this.state.filter === "todo") {
      temp = this.state.data.filter(ele => ele.status !== "done");
      return temp;
    } else if (this.state.filter === "done") {
      temp = this.state.data.filter(ele => ele.status !== "todo");
      return temp;
    } else if (this.state.filter === "all") {
      temp = this.state.data;
      return temp;
    }
  };
  handleChangeDataFix = (dataList, dataFix) => {
    //console.log("parent nhan dc datafix", dataList, dataFix);
    const temp = this.state.data.map(x => {
      if (x.item === dataList) {
        x.item = dataFix;
      }
      return x;
    });
    this.setState({ data: temp });
  };
  render() {
    const data = this._getFilterData();
    //console.log(this.state.data, "gfdhg");
    return (
      <div>
        <InputText handleData={this.handleDataMain} />

        {data.map((ele, id) => (
          <List
            dataList={ele.item}
            Del={this.handleDel}
            Checked={this.handleCheck}
            handleDataFix={this.handleChangeDataFix}
            CheckId={ele.status}
            key={id}
          />
        ))}

        <div className="footer">
          <ItemLeft itemleft={this.handleItemLeft()} />
          <AllBt All={this.handleAll} />
          <ActBt Act={this.handleAct} />
          <CompBt Complete={this.handleComp} />
          <ClearBt ClearComp={this.handleClearComp} />
        </div>
      </div>
    );
  }
}
export default Main;
