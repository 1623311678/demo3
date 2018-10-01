import React from "react";
import "./header.less";
import Select from "./select/select";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props: Boolean) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);

    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  render() {
    return (
      <>
        <div className="nav">
          <div className="nav-item">主页</div>
          <span className="iconfont icon-yonghu " />
            <span className="iconfont icon-yonghu " />
            <span className="iconfont icon-yonghu " />

          <Link to="/User">
            <span className="iconfont icon-yonghu " />
            <span className="iconfont icon-yonghu " />
            <span className="iconfont icon-yonghu " />
          </Link>
          <Link to="/Weather">
            <span className="iconfont icon-tianqi " />
          </Link>
        </div>
        <Select />
      </>
    );
  }
}

export default Header;
