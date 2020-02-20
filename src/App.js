import React, { Component } from "react";
import orc from "./background.jpg";
import Intro from "./Intro";
import "./App.css";
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
  state = {
    loaded: false
  };

  dobra = new UIfx(dobra);
  bracich = new UIfx(bracich);
  chetnie = new UIfx(chetnie);
  co = new UIfx(co);
  costrzazrobic = new UIfx(costrzazrobic);
  czegotychciec = new UIfx(czegotychciec);
  czemunie = new UIfx(czemunie);
  dobradobra = new UIfx(dobradobra);
  gotow = new UIfx(gotow);
  janiebyctakiork = new UIfx(janiebyctakiork);
  jatozrobie = new UIfx(jatozrobie);
  pracapraca = new UIfx(pracapraca);
  spokoj = new UIfx(spokoj);
  tak = new UIfx(tak);
  zabawa = new UIfx(zabawa);
  sprobuje = new UIfx(sprobuje);
  zajety = new UIfx(zajety);

  orcPlay = e => {
    console.log(e.target.id);
    let id = e.target.id;
    // this.bracich.play();
    if (id === "dobra") {
      this.dobra.play();
    } else if (id === "bracich") {
      this.bracich.play();
    } else if (id === "chetnie") {
      this.chetnie.play();
    } else if (id === "co") {
      this.co.play();
    } else if (id === "costrzazrobic") {
      this.costrzazrobic.play();
    } else if (id === "czegotychciec") {
      this.czegotychciec.play();
    } else if (id === "czemunie") {
      this.czemunie.play();
    } else if (id === "dobradobra") {
      this.dobradobra.play();
    } else if (id === "gotow") {
      this.gotow.play();
    } else if (id === "janiebyctakiork") {
      this.janiebyctakiork.play();
    } else if (id === "jatozrobie") {
      this.jatozrobie.play();
    } else if (id === "pracapraca") {
      this.pracapraca.play();
    } else if (id === "spokoj") {
      this.spokoj.play();
    } else if (id === "tak") {
      this.tak.play();
    } else if (id === "zabawa") {
      this.zabawa.play();
    } else if (id === "sprobuje") {
      this.sprobuje.play();
    } else if (id === "zajety") {
      this.zajety.play();
    }
  };

  orc = orc;
  render() {
    setTimeout(() => {
      this.setState({
        loaded: true
      });
    }, 6000);

    return this.state.loaded ? (
      <div className="app">
        <img src={this.orc} alt="" />
        <div className="buttons">
          {" "}
          <button onClick={this.orcPlay} id="dobra">
            <span>[ </span>Dobra!
            <span> [</span>
          </button>
          <button onClick={this.orcPlay} id="bracich">
            <span>[ </span> Brać ich!<span> [</span>
          </button>
          <button onClick={this.orcPlay} id="chetnie">
            <span>[ </span> Chętnie!<span> [</span>
          </button>
          <button onClick={this.orcPlay} id="co">
            <span>[ </span> Co?<span> [</span>
          </button>
          <button onClick={this.orcPlay} id="costrzazrobic">
            <span>[ </span> Coś trza zrobić?<span> [</span>
          </button>
          <button onClick={this.orcPlay} id="czegotychciec">
            <span>[ </span> Czego ty chcieć?<span> [</span>
          </button>
          <button onClick={this.orcPlay} id="czemunie">
            <span>[ </span> Czemu nie?<span> [</span>
          </button>
          <button onClick={this.orcPlay} id="dobradobra">
            <span>[ </span> Dobra, dobra.<span> [</span>
          </button>
          <button onClick={this.orcPlay} id="gotow">
            <span>[ </span> Gotów do pracy.<span> [</span>
          </button>
          <button onClick={this.orcPlay} id="janiebyctakiork">
            <span>[ </span> Ja nie być taki ork! <span> [</span>
          </button>
          <button onClick={this.orcPlay} id="jatozrobie">
            <span>[ </span> Ja to zrobię.<span> [</span>
          </button>
          <button onClick={this.orcPlay} id="pracapraca">
            <span>[ </span> Praca, praca.<span> [</span>
          </button>
          <button onClick={this.orcPlay} id="spokoj">
            <span>[ </span> Dać mi spokój!<span> [</span>
          </button>
          <button onClick={this.orcPlay} id="tak">
            <span>[ </span> Tak!<span> [</span>
          </button>
          <button onClick={this.orcPlay} id="zabawa">
            <span>[ </span> Nie czas na zabawę.<span> [</span>
          </button>
          <button onClick={this.orcPlay} id="sprobuje">
            <span>[ </span> Spróbuję!<span> [</span>
          </button>
          <button onClick={this.orcPlay} id="zajety">
            <span>[ </span> Ja zajęty.<span> [</span>
          </button>
        </div>
      </div>
    ) : (
      <Intro />
    );
  }
}

export default App;
