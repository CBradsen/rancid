//Imports
import React from "react";
import "../DetailedView/DetailedView.css";
import PropTypes from 'prop-types';

//Functions
const DetailedView = ({
  title,
  posterImg,
  backdropImg,
  releaseDate,
  overview,
  averageRating,
  genres,
  budget,
  revenue,
  runtime,
  tagline,
  resetMainPage,
}) => {
  return (
    <div className="single-movie">
      <button onClick={() => resetMainPage()}>Back to main on click</button>
      <img className="single-poster" src={posterImg} alt={title} />
      <img className="backdrop" src={backdropImg} alt={title} />
      <div className="movie-numbers">
        <h3>{averageRating}</h3>
        <h3>{runtime}</h3>
        <h3>{releaseDate}</h3>
        <h3>{revenue}</h3>
        <h3>{budget}</h3>
      </div>
      <div className="movie-text">
        <h3>{genres}</h3>
        <h3>{title}</h3>
        <h3>{tagline}</h3>
        <h3>{overview}</h3>
      </div>
    </div>
  );
};

export default DetailedView;

//Proptypes
  DetailedView.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  posterImg: PropTypes.string.isRequired,
  backdropImg: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  averageRating: PropTypes.number.isRequired,
  genres: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  budget: PropTypes.number.isRequired,
  revenue: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  tagline: PropTypes.string.isRequired,
  resetMainPage: PropTypes.func.isRequired
};