import React from "react";
import "./content.less";

class Content extends React.Component {
  render() {
    return (
      <div className="ss">
        <div className="content">
          <div className="content-first right">
            <li>运动控制系统</li>
            <li>1-11</li>
            <li>闫馨</li>
            <li>静远楼118</li>
            <div className="footer-item">第1节 08:00-08:45 08:50-09:35</div>
          </div>
          <div className="content-first left">
            <li>高压电技术</li>
            <li>1-9</li>
            <li>施振雷</li>
            <li>静远楼118</li>
            <div className="footer-item">第2节 09:55-10:40 10:45-11:30</div>
          </div>
        </div>
        <div className="content">
          <div className="content-first second-right">
            <li>矿山智能电器</li>
            <li>1-9</li>
            <li>林海</li>
            <li>静远楼228</li>
            <div className="footer-item">第1节 08:00-08:45 08:50-09:35</div>
          </div>
          <div className="content-first second-left">
            <li>电力系统分析</li>
            <li>1-18</li>
            <li>张国军</li>
            <li>静远楼321</li>
            <div className="footer-item">第2节 09:55-10:40 10:45-11:30</div>
          </div>
        </div>
        <div className="footer">
        <li>第5节 19:00-19:45 19:50-20:35</li>
        </div>
        </div>
    );
  }
}

export default Content;
