import React from "react";
import "./footer.less";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-page">
        <div className="footer-icon">
          <span className="iconfont icon-zhuye first-icon" />
          <span className="iconfont icon-kebiao " />
          <span className="iconfont icon-kaoshianpai " />
          <span className="iconfont icon-chengjichaxun " />
        </div>
        <div className="footer-wenzi">
          <span className="footer-content">主页</span>
          <span className="footer-content">本周课表</span>
          <span className="footer-content">考试安排</span>
          <span className="footer-content">成绩查询</span>
        </div>
       </div>
      
    );
  }
}

export default Footer;
