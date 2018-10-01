import React from "react";
import "./city.less";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// 使用iscroll的probe版本，才能触发onScroll事件
const IScroll = require("lib/iscroll-probe").default;

// 阻止move
const PREVENT_MOVE = "preventmove";

class City extends React.Component {
  
  render() {
    return (
      <div id="wrapper">
        <div id="scroller">
          <li>1232</li>
          <li>1213</li>
          <li>1231</li>
          <li>1231</li>
          <li>1231</li>
        </div>
      </div>
    );
  }
}

export default City;
