import React, { useContext } from 'react';
import { ContentContext } from '../contexts/Content';
import {
    Container, Row, Col, NavLink
} from 'reactstrap';

import '../App.css';

function ContentSection() {
    const { contents } = useContext(ContentContext);
    return (
        <section className='ContextSection'>
            <Container>
                <Row className="w-100 m-0">
                    {
                        contents.map((content, index) =>
                            <Col md="6" lg="4" key={index}>
                                <div className='ContextSection-icon'>
                                    <img src={content.icon} alt="" />
                                </div>
                                <h3 className='ContextSection-title'>{content.title}</h3>
                                <p className='ContextSection-text'>{content.content}</p>
                                <NavLink className="link-b" href="#">Learn more</NavLink>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </section>
    );
}

export default ContentSection;