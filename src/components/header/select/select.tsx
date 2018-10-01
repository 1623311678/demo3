import React from "react";
import "./select.less";

class Select extends React.Component {
  render() {
    return (
      <div className="select">
        <div className="item">
          <span>日常必备</span>
          <span>教务公告</span>
          <span>实用工具</span>
        </div>
      </div>
    );
  }
}

export default Select;
