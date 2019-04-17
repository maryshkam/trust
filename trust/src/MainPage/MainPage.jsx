import React, { Component } from "react";
import "./MainPage.css";
import TableRow from "../TableRow/TableRow";
import hoursArr from "./trading-hours";

class MainPage extends Component {
  state = {
    isChecked: false
  };

  onChecked = () => {
    this.setState({
      isChecked: !this.state.isChecked
    });
  };

  isOpen = el => {
    const time = new Date().getTime();
    return el.tradingHours.some(elem => {
      if (elem.from <= time && time <= elem.to) {
        el.isOpened = true;
        return true;
      }
    });
  };

  render() {
    const {isChecked } = this.state;
    const filtredArr = !isChecked
      ? hoursArr
      : hoursArr.filter(el => el.isOpened);
    // console.log("filtredArr", filtredArr);
    return (
      <div>
        <label className='label_checkbox'><input className='checkbox' name="checkbox" type="checkbox" onClick={this.onChecked} />Open only</label>
        {/* <input className='checkbox' name="checkbox" type="checkbox" onClick={this.onChecked} /> */}
        <table className="table">
          <thead className="table_head">
            <p className="name_table">Trade hours</p>
            <tr className="tr">
              {/* <td className="td">check</td> */}
              <td className="td">id</td>
              <td className="td">name</td>
              <td className="td">open/close</td>
            </tr>
          </thead>
          <tbody>
            {filtredArr.length !== 0
              ? filtredArr.map(el => (
                  <TableRow
                    isOpen={this.isOpen(el)}
                    el={el}
                    key="el.instrumentID"
                    getTime={this.getTime}
                    getCheckedElement={this.getCheckedElement}
                  />
                ))
              : null}
          </tbody>
        </table>
      </div>
    );
  }
}
export default MainPage;
