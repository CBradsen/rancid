import React from 'react';
import '../Poster/Poster.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const Poster = ({ posterImg, posterId, posterTitle }) => {
  return (
    <Link key={posterId} to={`/${posterId}`}>
    <img className="poster-img" src={posterImg} id={posterId} alt={posterTitle} />
  </Link>
  );
};

export default Poster;

// PropTypes
Poster.propTypes = {
  posterImg: PropTypes.string.isRequired,
  posterId: PropTypes.number.isRequired,
  posterTitle: PropTypes.string.isRequired,
};