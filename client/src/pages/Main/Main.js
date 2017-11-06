import React, { Component } from "react";
import { Container } from "../../components/Grid";
import Search from "../../components/Search";
import Saved from '../../components/Saved';

class Main extends Component {

  render() {
    return (
      <Container fluid>

        <Search />
        <Saved />

      </Container>
    );
  }
}

export default Main;
