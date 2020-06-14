import React from 'react';
import '../App.css';
import { Container, Row, Col, NavLink } from 'reactstrap';

function CommitmentSection() {
  return (
      <section className='CommitmentSection'>
          <Container>
              <Row className='CommitmentSection-flex w-100 m-0'>
                  <Col lg="7" md="12" className="pr-0">
                    <img src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_698,h_465/v1558736931/assets/e5/fb1f43-f1bf-4dd2-b62d-6015c758d2ee/original/Safety_ilo.svg" alt=""/>
                  </Col>
                  <Col lg="5" md="12" className="pl-0">
                      <h1>Our commitment to your safety</h1>
                      <p>With every safety feature we add and every standard in our Community Guidelines we uphold, we're committed to working to create a safe environment for our users.</p>
                      <Row className="flex-lg-column flex-md-row pl-3">
                        <NavLink className="link-b link-w mr-5" href="#">Learn more about our Community Guidelines</NavLink>
                        <NavLink className="link-b link-w" href="#">See all safety features</NavLink>
                      </Row>
                  </Col>
              </Row>
          </Container>
      </section>
  );
}

export default CommitmentSection;