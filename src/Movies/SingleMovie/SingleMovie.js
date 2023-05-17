//Imports
import React from "react";
import "../SingleMovie/SingleMovie.css";
import DetailedView from "../../DetailedView/DetailedView";
import PropTypes from 'prop-types';

//Functions
const SingleMovie = ({ selectedPoster, resetMainPage }) => {
  if (!selectedPoster || !selectedPoster.movie) {
    return 
    {}; 
  }
  const {
    id,
    title,
    poster_path,
    backdrop_path,
    release_date,
    overview,
    average_rating,
    genres,
    budget,
    revenue,
    runtime,
    tagline
  } = selectedPoster.movie;

  let singleMovieDisplay = (
    <DetailedView
      id={id}
      title={title}
      posterImg={poster_path}
      backdropImg={backdrop_path}
      releaseDate={release_date}
      overview={overview}
      averageRating={average_rating}
      genres={genres}
      budget={budget}
      revenue={revenue}
      runtime={runtime}
      tagline={tagline}
      key={id}
      resetMainPage={resetMainPage}
    />
  );

  return <div className="detail-container">{singleMovieDisplay}</div>;
};

export default SingleMovie;

//PropTypes
SingleMovie.propTypes = {
  resetMainPage: PropTypes.func.isRequired,
  selectedPoster: PropTypes.shape({
    movie: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
      backdrop_path: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      average_rating: PropTypes.number.isRequired,
      genres: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
      budget: PropTypes.number.isRequired,
      revenue: PropTypes.number.isRequired,
      runtime: PropTypes.number.isRequired,
      tagline: PropTypes.string.isRequired
    }),
  })
};