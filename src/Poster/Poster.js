import React from 'react';
import '../Poster/Poster.css';
import PropTypes from 'prop-types';

const Poster = ({ posterImg, posterId, posterTitle, setSinglePoster }) => {
  const handleClick = () => {
    setSinglePoster(posterId);
  };

  return (
    <a href={`/${posterId}`} onClick={handleClick}>
      <img className="poster-img" src={posterImg} id={posterId} alt={posterTitle} />
    </a>
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