import React, { Component } from 'react';
import { List, ListItem } from '../../components/List';
import { Col, Row } from '../../components/Grid';
import { FormBtn } from '../../components/Form';
import Main from '../Main';
import API from '../../utils/API';

class Saved extends Component {

  // Deletes an article from the database with a given id, then reloads articles from the db
  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.props.loadSaved())
      .catch(err => console.log(err));
  };

  render() {
    return (
      // This row will handle all of the saved articles
      <Row>
        <Col size="sm-12">
          <br />

          {/* This panel will initially be made up of a panel and wells for each of the articles retrieved */}
          <div className="panel panel-primary">
            {/* Panel Heading for the saved articles box */}
            <div className="panel-heading">
              <h3 className="panel-title">
                <strong>
                  <i className="fa fa-table" /> Saved Articles
                </strong>
              </h3>
            </div>

            {/* This main panel will hold each of the resulting articles */}
            {this.props.articles.length ? (
              <List>
                {this.props.articles.map(article => {
                  return (
                    <ListItem key={article._id} style={{ height: '67px' }}>
                      <a href={article.url} target="_blank">
                        <strong>{article.title}</strong>
                      </a>
                      <FormBtn
                        onClick={() => this.deleteArticle(article._id)}
                        style={{
                          padding: 0,
                          position: 'absolute',
                          right: '20px'
                        }}
                      >
                        Delete
                      </FormBtn>
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3 style={{ marginLeft: 15 }}>No Results to Display</h3>
            )}

            {/* This main panel will hold each of the resulting articles */}
            <div className="panel-body" id="well-section" />
          </div>
        </Col>
      </Row>
    );
  }
}

export default Saved;
