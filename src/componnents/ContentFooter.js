import React, { Component } from 'react';
import axios from 'axios';

import Data from './Data';
import '../App.css';
import { Row, Col } from 'reactstrap';


class ContentFooter extends Component {
  constructor() {
    super();
    this.state = {
      datas: []
    }
  }

  componentDidMount() {
    axios.get('https://db-server-project.herokuapp.com/datas')
      .then(res => {
        this.setState({
          datas: res.data
        });
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    const { datas } = this.state;
    return (
      <section className="ContentFooter">
        <Row>
          {
            datas.map((data, index) =>
              <Col lg="3" sm="6" md="4" key={index}>
                <h3 className="ContentFooter-title">{data.title}</h3>
                <Data>
                  {data.contents}
                </Data>
              </Col>
            )
          }
        </Row>
      </section>
    );
  }
}

export default ContentFooter;