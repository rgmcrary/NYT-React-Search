import React, { Component } from 'react';
import DeleteBtn from '../../components/DeleteBtn';
import { List, ListItem } from '../../components/List';
import { Col, Row, Container } from '../../components/Grid';

class Search extends Component {
  state = {
    articles: [],
    title: '',
    date: '',
    url: ''
  };

  render() {
    return (
      <div>
{/* Row for Searching New York Times */}
        <div className="row">
          <div className="col-sm-12">
            <br />
            {/* First panel is for handling the search parameters */}
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">
                  <strong>
                    <i className="fa  fa-list-alt" /> Search Parameters
                  </strong>
                </h3>
              </div>
              <div className="panel-body">
                {/* Here we create an HTML Form for handling the inputs */}
                <form >
                  {/* Here we create the text box for capturing the search term */}
                  <div className="form-group">
                    <label htmlFor="search">Topic:</label>
                    <input type="text" className="form-control" id="search-term" />
                  </div>

                  {/* Here we capture the Start Year Parameter */}
                  <div className="form-group">
                    <label htmlFor="start-year">Start Year (Optional):</label>
                    <input type="text" className="form-control" id="start-year" />
                  </div>

                  {/* Here we capture the End Year Parameter */}
                  <div className="form-group">
                    <label htmlFor="end-year">End Year (Optional):</label>
                    <input type="text" className="form-control" id="end-year" />
                  </div>

                  {/* <!-- Here we have our final submit button */}
                  <button type="submit" className="btn btn-default" id="run-search">
                    <i className="fa fa-search" /> Search
                  </button>
                  &nbsp;
                  <button type="button" className="btn btn-default" id="clear-all">
                    <i className="fa fa-trash" /> Clear Results
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* // This row will handle all of the retrieved articles */}
        <div className="row">
          <div className="col-sm-12">
            <br />

            {/* This panel will initially be made up of a panel and wells for each of the articles retrieved */}
            <div className="panel panel-primary">
              {/* Panel Heading for the retrieved articles box */}
              <div className="panel-heading">
                <h3 className="panel-title">
                  <strong>
                    <i className="fa fa-table" /> Results
                  </strong>
                </h3>
              </div>

              {this.state.articles.length ? (
                <List>
                  {this.state.articles.map(article => {
                    return <ListItem key={article._id}>
                        <a href={'/main/' + article._id}>
                          <strong>{article.title}</strong>
                        </a>
                        <DeleteBtn onClick={() => this.deleteMain(article._id)} />
                      </ListItem>;
                  })}
                </List>
              ) : (
                <h3>No Results to Display</h3>
              )}

              {/* This main panel will hold each of the resulting articles */}
              <div className="panel-body" id="well-section" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
