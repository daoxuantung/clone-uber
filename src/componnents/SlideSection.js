import React, { useContext } from 'react';
import { SlideContext } from '../contexts/Slide';
import classNames from 'classnames';
import { Container, Row, Col } from 'reactstrap';
import '../App.css';

export default function SlideSection() {
  const { slides, onClick } = useContext(SlideContext);
  return (
      <section className='SlideSection'>
          {
            slides.map((slide, index) => 
              <div key={index} className={classNames('SlideSection-image', { 'image-show' : slide.isBorder })}>
                <img src={slide.coverUrl} alt=""/>
              </div>
            )
          } 

        <Container className="SlideSection-bar">
          <div className="mark"></div>
          <Row className="w-100 m-0">
          {
            slides.map((slide, index) => 
              <Col md="1" sm="3" xs="6"
                key={index} 
                className='SlideSection-element' 
                onClick={(e) => onClick(e.target, slide)}
              >
                <img src={slide.icon} alt=""/>
                <p>{slide.name}</p>
              </Col>
            )
          }
          </Row>
        </Container>
        <Container>
          {
            slides.map((slide, index) => 
              <div key={index} className={classNames('SlideSection-content', { 'SlideSection-show' : slide.isBorder })}>
                <h1>{slide.title}</h1>
                <p>{slide.content}</p>
                <a href="/" className="btn-more btn-background">{slide.text}</a>
              </div>
            )
          }
        </Container>
      </section>
  );
}

