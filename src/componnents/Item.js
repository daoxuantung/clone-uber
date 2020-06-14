import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, NavLink
  } from 'reactstrap';

import '../App.css';

function Item(props) {
    const {card} = props;
  return (
        <Card className="Item">
        <CardImg top width="100%" src={card.imageUrl} alt="" />
        <CardBody className="pl-0">
            <CardTitle>{card.title}</CardTitle>
            <CardText>{card.content}</CardText>
            <NavLink className="link-b" href="#">Learn more</NavLink>
        </CardBody>
        </Card>
    )
}

export default Item;