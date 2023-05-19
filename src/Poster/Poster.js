import React from 'react';
import '../Poster/Poster.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const Poster = ({ posterImg, posterId, posterTitle, setSinglePoster }) => {
  const handleClick = () => {
    setSinglePoster(posterId);
  };

  return (
    <Link key={posterId} to={`/${posterId}`}>
    <img className="poster-img" src={posterImg} id={posterId} alt={posterTitle} onClick={handleClick} />
  </Link>
  
  );
};

export default Poster;

// PropTypes
Poster.propTypes = {
  posterImg: PropTypes.string.isRequired,
  posterId: PropTypes.number.isRequired,
  posterTitle: PropTypes.string.isRequired,
  setSinglePoster: PropTypes.func.isRequired,
};