import React, { Component } from "react";
import UIfx from "uifx";
import mozdzierze from "./sounds/mozdzierze.mp3";

class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  mozdzierze = new UIfx(mozdzierze);
  render() {
    this.mozdzierze.play();
    return (
      <div className="intro">
        <h1>Peon Soundboard by NordVinterSkog</h1>
      </div>
    );
  }
}

export default Intro;
