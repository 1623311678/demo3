import React from "react";
import Header from "components/header";
import Top from "components/top";
import Content from "components/content";
import Footer from "components/footer";
import User from "components/user";
import Weather from "components/weather";
import Hhh from "components/hhh";
import City from "components/city";

import "./app.less";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { unlink } from "fs";
import { render } from "react-dom";

function Home() {
  return (
    <div className="page">
      <Header />
      <Top />
      <Content />
      <Footer />
    </div>
  );
}
/*显示时间，客户端定时器 */
interface DataListState {
  date: any;
}
interface DataListProps {}
class Clock extends React.Component<DataListProps, DataListState> {
  constructor(props: DataListState) {
    super(props);
    this.state = { date: new Date() };
  }
  timerID: any;
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div>
        <h1>hellow,world</h1>
        <h2>it is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
function NumberList(props: any) {
  const numbers = props.numbers;
  const listItems = numbers.map((number: any) => (
    <li key={number.toString()}>{number}</li>
  ));
  return <ul>{listItems}</ul>;
}
/* 点击事件，div框的显示与隐藏,&&条件渲染*/
interface ClickFlashState {
  isClick: boolean;
}
interface ClickFlashProps {
 
}

class ClickFlash extends React.Component<ClickFlashProps, ClickFlashState> {
  constructor(props: ClickFlashProps) {
    super(props);
    this.state = { isClick: false };
  }

  render() {
    const { isClick } = this.state;
  
    /*functionh Dell()if条件渲染 */
    function Dell() {
      if (isClick) {
        return <div className="box3" />;
      } else {
        return <div className="box5" />;
      }
    }
    return (
      <div>
        <ul className="box6"></ul>
        <div className="box">
          <button className="click" onClick={this.Flash}>
            点击
          </button>
        </div>
        <div className={this.ChangeState()} />
        {/*三目运算符，isClick?(<div className="box3"></div>):(<div className="box5"></div>)*/}
        <Dell />
      </div>
    );
  }

  private Flash = () => {
    this.setState({
      isClick: !this.state.isClick
    });
  };
  ChangeState() {
    return this.state.isClick ? "box1" : "";
  }
}

/* 表单事件*/
interface NameFormState {
  value: string;
}
interface NameFormProps {}
class NameForm extends React.Component<NameFormProps, NameFormState> {
  constructor(props: NameFormProps) {
    super(props);
    this.state = { value: "" };
  }
  private handleChange = (event: any) => {
    this.setState({ value: event.target.value });
  };
  private handleSubmit = (event: any) => {
    alert("A name was submitted:" + this.state.value);
    <div>您好您的信息已提交，感谢您的参与</div>;
    event.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          名字:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }
}

class App extends React.Component {
  render() {
    const b = () => {
      const array = [1, 2, 2, 4, 2, 4, 1, 3, 5, 6];

      for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length - 1; j++) {
          if (array[i] - array[j] === 0) return array[i];
        }
      }
    };
    console.log({ b });

    return (
      /*<div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/User" component={User} render={() => <User />} />
            <Route path="/Weather" component={Weather}  render={() => <Weather />} />
            <Route path="/Hhh" component={Hhh}  />
            <Route path="/City" component={City}  />
          </Switch>
        </Router>
    
      </div>*/
      <div>
        <ClickFlash />
      </div>
    );
  }
}

export default App;
