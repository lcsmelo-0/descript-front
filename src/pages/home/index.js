import React, { Component } from 'react'

import { Container, Row, Col } from 'reactstrap'

import Login from '../login'

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Container>
          <Row>
            <Col md="6">Sejam muito bem-vindos ao Descript</Col>
            <Col md= "6">
              <Login />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
