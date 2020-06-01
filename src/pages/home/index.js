import React, { Component } from 'react'

import { Container, Row, Col } from 'reactstrap'

import computerGirl from '../../assets/img/illustration-1.svg'
import skateGuy from '../../assets/img/illustration-5.svg'
import boardCouple from '../../assets/img/illustration-6.svg'
import sportCouple from '../../assets/img/illustration-7.svg'

export default class Home extends Component {
  render() {
    return (

      <>
        <section className="slice py-5 py-lg-7">
          <Container>
            <Row className="row row-grid align-items-center">
              <Col className="col-12 col-md-5 col-lg-6 order-md-2">
                <figure className="w-100">
                  <img alt="Image placeholder" src={computerGirl} className="img-fluid" />
                </figure>
              </Col>
              <Col className="col-12 col-md-7 col-lg-6 order-md-1 pr-md-5">
                <h1 className="display-4 text-center text-md-left mb-3">
                  Lorem ipsum dolor sit amet <strong className="text-primary">Descript</strong>
                </h1>
                <p className="lead text-center text-md-left text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra interdum purus, quis ultrices sapien gravida ut. Phasellus bibendum pellentesque felis, ac ultricies augue pulvinar nec</p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="slice slice-lg pt-lg-6 pb-0 pb-lg-6">
          <Container>
            <div className="row justify-content-lg-end">
              <div className="col-lg-5 text-lg-right">
                <h6 className="display-4 text-danger">3k+</h6>
                <p className="lh-180 mb-3">Our mission is to give developers some amazing possibilities to create high quality digital products with less time and money spent.</p>
              </div>
              <div className="col-lg-6">
                <h3 className="display-4 lh-130">Successfuly completed projects &amp; ideas</h3>
              </div>
            </div>
            <Row md="5">
              <Col md="4">
                <div className="card border-0 bg-soft-danger">
                  <div className="card-body pb-5"><div className="pt-4 pb-5">
                    <img src={skateGuy} className="img-fluid img-center" style={{ height: "200px" }} alt="Illustration" />
                  </div>
                    <h5 className="h4 lh-130 text-dark mb-3">Unleash you creativity</h5>
                    <p className="text-dark opacity-6 mb-0">Quick Website UI Kit contains components and pages that are easy to customize and change.</p>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="card border-0 bg-soft-success mt-lg-5">
                  <div className="card-body pb-5">
                    <div className="pt-4 pb-5">
                      <img src={boardCouple} className="img-fluid img-center" style={{ height: "200px" }} alt="Illustration" />
                    </div><h5 className="h4 lh-130 text-dark mb-3">Get more results</h5>
                    <p className="text-dark opacity-6 mb-0">Quick Website UI Kit contains components and pages that are easy to customize and change.</p>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="card border-0 bg-soft-warning mt-lg-7">
                  <div className="card-body pb-5"><div className="pt-4 pb-5">
                    <img src={sportCouple} className="img-fluid img-center" style={{ height: "200px" }} alt="Illustration" />
                  </div>
                    <h5 className="h4 lh-130 text-dark mb-3">Increase your audience</h5>
                    <p className="text-dark opacity-6 mb-0">Quick Website UI Kit contains components and pages that are easy to customize and change.</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    )
  }
}
