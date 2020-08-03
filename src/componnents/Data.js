import React from 'react';
import { NavLink } from 'reactstrap';

import '../App.css';

function Data(props) {
    const { children } = props;
    return (
        <div className="Data">
            {
                children.map((item, index) =>
                    <NavLink className="Data-link" href="#" key={index}>{item}</NavLink>
                )
            }
        </div>
    )
}

export default Data;