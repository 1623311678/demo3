import React from "react";
import "./user.less";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class User extends React.Component {
  

  render() {
    return (
      <div className="user">
        <div className="user1">
          <Link to="/">返回</Link>
          <div className="header-item">
            <img
              src={require("./images/5.png")}
              alt=""
              className="user-image"
            />

            <div className="user-item">王俊锴</div>
            <div className="user-item">电气与控制工程学院</div>
            <div className="user-item">电气15-7</div>
          </div>

          <div className="icon-item">
            <div className="iconfont icon-jishiben icon">自服务条款</div>
            <div className="iconfont icon-fenxiang icon">分享给好友</div>
            <div className="iconfont icon-guanyu_o icon">关于</div>
            <div className="iconfont icon-yijianfankui icon">意见反馈</div>
            <div className="iconfont icon-shezhi  icon">设置</div>
            <div className="iconfont icon-shebeitihuan icon">更换账号</div>
            <div className="iconfont icon-zhuxiao icon">注销</div>
            <div className="iconfont icon-tuichu icon">退出</div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
