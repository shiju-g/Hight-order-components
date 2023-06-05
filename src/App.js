import { SampleHighOrderComponent } from "./components/hocs/SampleHighOrderComponent";
import React from "react";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">{props.extraProps}</header>
    </div>
  );
}

const SuperPower = SampleHighOrderComponent(App);

export default SuperPower;
