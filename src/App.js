import React, { Component } from "react";
import UIfx from "uifx";
import dobra from "./sounds/dobra.mp3";
import bracich from "./sounds/bracich.mp3";
import chetnie from "./sounds/chetnie.mp3";
import co from "./sounds/co.mp3";
import costrzazrobic from "./sounds/costrzazrobic.mp3";
import czegotychciec from "./sounds/czegotychciec.mp3";
import czemunie from "./sounds/czemunie.mp3";
import dobradobra from "./sounds/dobradobra.mp3";
import gotow from "./sounds/gotow.mp3";
import janiebyctakiork from "./sounds/janiebyctakiork.mp3";
import jatozrobie from "./sounds/jatozrobie.mp3";
import pracapraca from "./sounds/pracapraca.mp3";
import spokoj from "./sounds/spokoj.mp3";
import tak from "./sounds/tak.mp3";
import zabawa from "./sounds/zabawa.mp3";
import sprobuje from "./sounds/sprobuje.mp3";
import zajety from "./sounds/zajety.mp3";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  dobra = new UIfx(dobra);
  bracich = new UIfx(bracich, {
    volume: 0.4, // number between 0.0 ~ 1.0
    throttleMs: 100
  });
  orcPlay = e => {
    console.log(e.target.id);
    let id = e.target.id;
    this.dobra.play();
  };

  render() {
    return (
      <div className="app">
        <button onClick={this.orcPlay} id="dobra">
          DOBRA
        </button>
        <button onClick={this.orcPlay}>DOBRA</button>
      </div>
    );
  }
}

export default App;
