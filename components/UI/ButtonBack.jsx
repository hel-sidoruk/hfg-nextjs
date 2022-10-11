/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import Arrow from '../../assets/arrow.svg';

const ButtonBack = ({ link }) => {
  return (
    <Link href={link}>
      <a className="btn-back btn-fill">
        {/* <img src={Arrow} alt="arrow" /> */}
      </a>
    </Link>
  );
};

export default ButtonBack;
