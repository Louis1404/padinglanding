import React from "react";
import NavBar from "./Navbar";
import Banner from "./Banner";
import Why from "./Why";
import How from "./How";
import Simple from "./Simple";
import Cards from "./Cards";
import MyClimate from "./MyClimate";
import Footer from "./Footer";
import "./_App.scss";

export default class App extends React.Component {
  scrollUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render() {
    return (
      <div>
        <NavBar />
        <Banner />
        <Why />
        <How />
        <Simple />
        <Cards />
        <MyClimate />
        <Footer scrollUp={this.scrollUp} />
      </div>
    );
  }
}
