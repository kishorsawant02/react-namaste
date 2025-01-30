import React, { Component } from "react";
import Child from "./Child";

export default class AboutClass extends Component {
  constructor(props) {}
  compenentDidMount() {
    console.log("compenentDidMount");
    // Make API call here
    // const data = api response
    // setstate{data}
    //then it goes toupdateing cycle  $$
  }
  componentDidUpdate() {
    //it comes from $$
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    console.log("render -parent");
    return (
      <div>
        AboutClass
        <Child />
      </div>
    );
  }
}
//render phase
//////parent constructor
///// parent - render
///// child constructor 1
///// child render
//Commit Phase
///// child compenentDidMount
///// parent compenentDidMount

/*
constructor (fumy)
render with dumy
component Did compenentDidMount
api call
setstate == sets the new api data
UPDATE CYCLE
render api data
componentDidUpdate
if u navigate to diffrent url 
componentWillUnmount
*/
