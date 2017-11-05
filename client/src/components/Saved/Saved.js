import React, { Component } from 'react';
import DeleteBtn from '../../components/DeleteBtn';
import { List, ListItem } from '../../components/List';
import { Col, Row, Container } from '../../components/Grid';

class Saved extends Component {
  render() {
    return (
      // This row will handle all of the saved articles
      <div class="row">
        <div class="col-sm-12">
          <br />

          {/* This panel will initially be made up of a panel and wells for each of the articles retrieved */}
          <div class="panel panel-primary">
            {/* Panel Heading for the saved articles box */}
            <div class="panel-heading">
              <h3 class="panel-title">
                <strong>
                  <i class="fa fa-table" /> Saved Articles
                </strong>
              </h3>
            </div>

            {/* This main panel will hold each of the resulting articles */}
            <div class="panel-body" id="well-section" />
          </div>
        </div>
      </div>
    );
  }
}
export default Saved;
