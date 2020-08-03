import React from 'react';
import classNames from 'classnames/bind';

import { NavLink } from 'reactstrap';

import '../App.css';

function ShowForm(props) {
  const { isShow, title, isClose } = props;
  return (
    <div className={classNames('ShowForm', { 'ShowForm-show': isShow })}>
      {
        title.map((value, index) =>
          <NavLink href="#" key={index} className="ShowForm-text">
            {value}
            <svg width={32} height={32}>
              <path d="M22.2 12l-6.5 9h-3.5l5.5-7.5H2v-3h15.7L12.2 3h3.5l6.5 9z" fill="currentColor"></path>
            </svg>
          </NavLink>
        )
      }
      <div className="close" onClick={isClose}>X</div>
    </div>
  );
}

export default ShowForm;
