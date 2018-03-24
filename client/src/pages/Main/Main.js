import React, { Component } from 'react';
import { Container } from '../../components/Grid';
import Search from '../Search';
import Saved from '../Saved';

class Main extends Component {
    render() {
        return (
            <Container fluid>
                <Search
                    loadSaved={this.loadSavedArticles}
                />
                <Saved
                    loadSaved={this.loadSavedArticles}
                    articles={this.state.savedArticles}
                />
            </Container>
        );
    }
}

export default Main;
