import React, { useContext } from 'react';
import { CardContext } from '../contexts/Card';
import {
    Container, Row, Col
  } from 'reactstrap';

import Item from './Item';
import '../App.css';

function CardSection() {
  const { cards } = useContext(CardContext);
  return (
    <section className='CardSection'>
        <Container>
            <h2 className='CardSection-title'>Uber for Business</h2>
            <p  className='CardSection-text'>The power of Uber in everyday business</p>
            <Row className="w-100 m-0 CardSection-body mt-5">
                {
                    cards.map((card, index) =>
                        <Col md="6" lg="4" sm="12" className="card-padding" key={index}>
                            <Item card={card}/>
                        </Col>
                    )
                }
            </Row>
        </Container>
    </section>
  );
}

export default CardSection;