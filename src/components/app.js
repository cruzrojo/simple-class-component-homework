import React, { Component } from "react";
import moment from "moment";

import NavigationContainer from "./navigation";
export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavigationContainer />
        <h1>Burke Rich Homework Assignment</h1>
        <h2>Awesome Power</h2>
        <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
        <h1>Hello World</h1>
      </div>
    );
  }
}
