import React, { Component } from 'react';
import classNames from 'classnames';

import { NavLink } from 'reactstrap';

import '../App.css';

class HeaderToggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false
        }
        this.isShow = this.isShow.bind(this);
    }


    isShow()  {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    render() {
        return (
            <div className={classNames('HeaderToggle', { 'HeaderToggle-show': this.props.isOpen})}>
                <NavLink className="HeaderToggle-title" onClick={this.isShow}>
                    Company
                </NavLink>
                <NavLink className="HeaderToggle-link" href="/about-us/">About us</NavLink>
                <NavLink className="HeaderToggle-link" href="/how-uber-works/">How Uber works</NavLink>
                <NavLink className="HeaderToggle-link" href="/global-citizenship/">Global citizenship</NavLink>
                <NavLink className="HeaderToggle-link" href="/newsroom/">Newsroom</NavLink>   
                <NavLink className="HeaderToggle-link" href="/investor-relations/">Investor relations</NavLink>
                <NavLink className="HeaderToggle-link" href="/blog/">Blog</NavLink>
                <NavLink className="HeaderToggle-link" href="/careers/">Careers</NavLink>   
            </div>
        );
    }
}

export default HeaderToggle;
