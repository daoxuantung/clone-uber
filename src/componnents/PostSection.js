import React from 'react';
import { Container } from 'reactstrap';

function PostSection() {
    return (
        <section className="PostSection">
            <img src="https://www.uber-assets.com/image/upload/v1556927537/assets/e4/ade93c-0b7b-4990-bda4-afef96793277/original/Modalities_banner_home.jpg" alt=""/>
            <Container className="PostSection-content">
                <h1>Setting 900+ cities in motion</h1>
                <a href="#" >View all cities</a>
            </Container>
        </section>
    );
}

export default PostSection;