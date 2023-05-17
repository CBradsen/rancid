import React from "react";
import "../DetailedView/DetailedView.css";
import PropTypes from 'prop-types';

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
  const handleReturn = () => {
    resetMainPage();
    window.location.href = '/';
  };

  return (
    <div className="single-movie">
      <img className="backdrop" src={backdropImg} alt={title} />
      <h2>{title}</h2>
      <img className="single-poster" src={posterImg} alt={title} />
      <div className="movie-numbers">
        <h4 className="average">Average Rating: {averageRating}</h4>
        <h4>Runtime: {runtime}</h4>
        <h4>Release Date: {releaseDate}</h4>
      </div>
      <div className="movie-text">
        <h3 className="genre">{genres}</h3>
        <h3 className="tagline">{tagline}</h3>
        <p className="overview">{overview}</p>
      </div>
      <div className="movie-money">
        <h4>Revenue: {revenue}</h4>
        <h4>Budget: {budget}</h4>
      </div>
      <button onClick={handleReturn}>Return to Main Menu</button>
    </div>
  );
};

export default DetailedView;

// PropTypes
DetailedView.propTypes = {
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