import React, { Component } from "react";
import Component2 from "./Component2";

export default class App extends Component {
  render() {
    return (
      <>
        <p>hello</p>
        <Component2 nome="guilherme" idade="23" />
        <Component2 idade="24" />
        <Component2 nome="*"/>
        <Component2 nome="jesus"/>
        <p>teste</p>
      </>
    )
  }
}