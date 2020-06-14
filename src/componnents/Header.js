/* eslint-disable jsx-a11y/alt-text */
import React, { Component }  from 'react';
import ShowForm from './ShowForm';
import HeaderToggle from './HeaderToggle';

import {
  Container, Row, Col,
  Navbar,
  NavbarBrand,
  Nav,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';
// eslint-disable-next-line
import '../App.css';

class Header extends Component {
  constructor(props) {
      super(props);
      this.state ={
        isOpen: false,
        isShow: false,
        title: []
      }
      this.isOpen = this.isOpen.bind(this);
      this.isShow1 = this.isShow1.bind(this);
      this.isShow2 = this.isShow2.bind(this);
      this.isClose = this.isClose.bind(this);
  }

  isOpen() {
    this.setState({
        isOpen: !this.state.isOpen
    })
  }

  isShow1() {
    this.setState({
        isShow: true,
        title: [
            'Drive Login', 'Rider login'
        ]
    })
  }

  isShow2() {
    this.setState({
        isShow: true,
        title: [
            'Sign up to drive', 'Sign up to ride'
        ]
    })
  }

  isClose() {
    this.setState({
        isShow: false,
    })
  }

  render() {
    const {isOpen, isShow, title} = this.state;

    const src = "https://cdn.glitch.com/a26bd76a-6823-41ff-a537-0a2ac1dc5db7%2Fopen-menu.svg?v=1591688923663";  
    return (
        <header className="Header">
            <Container>
                <Row className="Header-bar">
                    <Col md="6" xs="2">
                        <Navbar light expand="md" className="pl-0">
                            <NavbarBrand href="/">Uber</NavbarBrand>
                            <Nav className="mr-auto header-nav--none" navbar>
                                <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret className="nav-link-a">
                                    Company
                                </DropdownToggle>
                                <DropdownMenu right className="header-dropdown">
                                    <NavLink href="/about-us/">About us</NavLink>
                                    <NavLink href="/how-uber-works/">How Uber works</NavLink>
                                    <NavLink href="/global-citizenship/">Global citizenship</NavLink>
                                    <NavLink href="/newsroom/">Newsroom</NavLink>   
                                    <NavLink href="/investor-relations/">Investor relations</NavLink>
                                    <NavLink href="/blog/">Blog</NavLink>
                                    <NavLink href="/careers/">Careers</NavLink>
                                </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>  
                        </Navbar>
                    </Col>
                    <Col md="6" xs="10">
                        <Navbar light expand="md" className="navbar--height pr-0">
                            <button className="btn btn-login" onClick={this.isShow1}>Log in</button>
                            <button className="btn btn-signup" onClick={this.isShow2}>Sign up</button>
                            <img className="button-toggle" src={src} onClick={this.isOpen} width={32} height={32}/>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
            <HeaderToggle isOpen={isOpen}/>
            <ShowForm title={title} isShow={isShow} isClose={this.isClose} >
            </ShowForm>
            <Container>
                <Row className="header-flex">
                    <Col md="12" lg="6">
                        <img className="header-image" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_698,h_465/v1586184518/assets/ef/95d634-7cb9-4b27-8de0-79c9680c7077/original/City-4_5.jpg"/>
                    </Col>
                    <Col md="12" lg="6">
                        <h1>Help keep each other safe</h1>
                        <p>The world is upside down. Everything has changed. We are actively monitoring the coronavirus (COVID‑19) situation and are taking steps to help keep those that rely on our platform safe.</p>
                        <a href="/" className="btn-more">Learn more</a>
                    </Col>
                </Row>
            </Container>
        </header>
    );
  }
}

export default Header;
