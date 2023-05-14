//Imports
import React from 'react';
import '../Poster/Poster.css';
import PropTypes from 'prop-types';

//Functions
const Poster = ({posterImg, posterId, posterTitle, setSinglePoster}) => {
  return (
    <img className="poster-img" src={posterImg} id= {posterId} alt={posterTitle} onClick={() => setSinglePoster(posterId)}/>
  );
};

export default Poster;

//PropTypes
Poster.propTypes = {
  posterImg: PropTypes.string.isRequired,
  posterId: PropTypes.number.isRequired,
  posterTitle: PropTypes.string.isRequired,
  setSinglePoster: PropTypes.func.isRequired
};