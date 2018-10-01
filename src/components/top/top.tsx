import React from "react";
import "./top.less";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Top extends React.Component {
  render() {
    return (
      <>
        <div className="top">
          <div className="tupian">
            <span>
              <img src={require("./images/1.png")} alt="" />
            </span>

            <span>
              <img src={require("./images/2.png")} alt="" />
            </span>

            <span>
              <img src={require("./images/3.png")} alt="" />
            </span>

            <span>
              <img src={require("./images/4.png")} alt="" />
            </span>

            <span>
              <img src={require("./images/5.png")} alt="" />
            </span>
          </div>
          <div className="wenzi">
            <Link to="/Hhh">
              <span>教室查询</span>
            </Link>

            <span>挂科查询</span>

            <span>墙墙墙</span>
            <span>课程评估</span>
            <span>成绩分析</span>
          </div>
        </div>
        <div className="title">
          <div className="title-item">今日课程</div>
        </div>
      </>
    );
  }
}

export default Top;
