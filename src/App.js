import React, { Component } from 'react';
import Header from "./Component/Header/Header.js";
import Main from "./Component/Main/Main.js";
import Footer from "./Component/Footer/Footer.js";
//import styled from 'styled-components'


export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>

    )
  }
}
