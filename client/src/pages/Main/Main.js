import React, { Component } from "react";
import { Container } from "../../components/Grid";
import Search from "../Search";
import Saved from '../Saved';
import API from '../../utils/API';


class Main extends Component {
  state = {
    savedArticles: []
  };

  componentDidMount() {
    this.loadSavedArticles();
  } 

  loadSavedArticles = () => {
    API.getSavedArticles()
      .then(res =>
        this.setState({
          savedArticles: res.data
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return <Container fluid>
        <Search loadSaved={this.loadSavedArticles} />
        <Saved loadSaved={this.loadSavedArticles} articles={this.state.savedArticles} />
      </Container>;
  }
}

export default Main;
