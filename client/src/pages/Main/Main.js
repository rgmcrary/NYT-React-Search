import React, { Component } from "react";
import { Container } from "../../components/Grid";
import Search from "../Search";
import Saved from '../Saved';


class Main extends Component {

  render() {
    return (
      <Container fluid>

        <Search ref="Saved" />
        <Saved />

      </Container>
    );
  }
}

export default Main;
