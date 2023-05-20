import React from "react";
import "../DetailedView/DetailedView.css";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import Trailers from "../Trailers/Trailers"; 

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
  id,
  videos
}) => {
  return (
    <div className="single-movie">
      <img className="backdrop" src={backdropImg} alt={title} />
      <h2>{title}</h2>
      <img className="single-poster" src={posterImg} alt={title} />
      <div className="movie-numbers">
        <h4 className="average">Average Rating: {averageRating}</h4>
        <h4 className="runtime">Runtime: {runtime}</h4>
        <h4 className="release">Release Date: {releaseDate}</h4>
      </div>
      <div className="movie-text">
        <h3 className="genre">{genres}</h3>
        <h3 className="tagline">{tagline}</h3>
        <p className="overview">{overview}</p>
      </div>
      <div className="movie-money">
        <h4 className="revenue">Revenue: {revenue}</h4>
        <h4 className="budget">Budget: {budget}</h4>
      </div>
      <div className="videos">
        <h3>Trailer</h3>
        <Trailers trailerId={videos.key} /> 
      </div>
      <Link key={id} to='/'>
        <button>Return to Main Menu</button>
      </Link>
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
  videos: PropTypes.object.isRequired 
};