import React, { Component } from 'react';
import ContentFooter from './ContentFooter';

import '../App.css';

import { NavLink, Row, Col } from 'reactstrap';

class Footer extends Component {
  constructor() {
      super();
      this.state = {
          icons: [
            "https://cdn.glitch.com/a26bd76a-6823-41ff-a537-0a2ac1dc5db7%2Ffacebook.svg?v=1592132452547",
            "https://cdn.glitch.com/a26bd76a-6823-41ff-a537-0a2ac1dc5db7%2Ftwitter.svg?v=1592132464971",
            "https://cdn.glitch.com/a26bd76a-6823-41ff-a537-0a2ac1dc5db7%2Fyoutube.svg?v=1592132467350",
            "https://cdn.glitch.com/a26bd76a-6823-41ff-a537-0a2ac1dc5db7%2Finstagram.svg?v=1592132462058"
          ],
          images: [
              "https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-google-4d63c31a3e.svg",
              "https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-apple-f1f919205b.svg"
          ]
      }
  }

  render() {
    const { icons, images } = this.state;  
    return (
        <footer className="Footer">
            <h2 className="Footer-name">Uber</h2>
            <div className="Footer-link">
                <NavLink href="#">Visit help center</NavLink>
            </div>
            <ContentFooter />
            <div className="Footer-icon">
                <Row className="w-100 m-0 justify-content-between IconSection">
                    <Col md="6"  className="pl-0">
                        <Row className="w-100 m-0 h-100 align-items-center">
                            {
                                icons.map((icon, index) =>
                                <div className="icon-address"key={index}>
                                    <a className="icon-link" href="/" >
                                        <img src={icon} alt="" width={16}/>
                                    </a>
                                </div>
                                )
                            }
                        </Row>
                    </Col>
                    <Col md="6">
                        <Row className="justify-content-end">
                            {
                                images.map((icon, index) =>
                                <div className="icon-address" key={index}>
                                    <a href="/" >
                                        <img src={icon} alt="" width={150} height={50}/>
                                    </a>
                                </div>
                                )
                            }
                        </Row>
                    </Col>
                </Row>
                <Row className="Footer-footer">
                    <Col sm="6" className="FooterSection-margin">
                        <div className="copyright">© 2020 Uber Technologies Inc.</div>
                    </Col>
                    <Col sm="6">
                        <Row className="justify-content-end pr-4">
                            <NavLink className="copyright-link" href="#">Privacy</NavLink>
                            <NavLink className="copyright-link" href="#">Accessibility</NavLink>
                            <NavLink className="copyright-link" href="#">Terms</NavLink>
                        </Row>
                    </Col>
                </Row>
            </div>
        </footer>
    );
  }
}

export default Footer;