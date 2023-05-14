import React from "react";
import "../SingleMovie/SingleMovie.css";
import DetailedView from "../../DetailedView/DetailedView";
import PropTypes from 'prop-types';

function SingleMovie({ selectedPoster, resetMainPage }) {
let singleMovieDisplay = (
    <DetailedView
        id={selectedPoster.movie.id}
        title={selectedPoster.movie.title}
        posterImg={selectedPoster.movie.poster_path}
        backdropImg={selectedPoster.movie.backdrop_path}
        releaseDate={selectedPoster.movie.release_date}
        overview={selectedPoster.movie.overview}
        averageRating={selectedPoster.movie.average_rating}
        genres={selectedPoster.movie.genres}
        budget={selectedPoster.movie.budget}
        revenue={selectedPoster.movie.revenue}
        runtime={selectedPoster.movie.runtime}
        tagline={selectedPoster.movie.tagline}
        key={selectedPoster.movie.id}
        resetMainPage={resetMainPage}
      />
    )

  return <div className="detail-container">
    {singleMovieDisplay}
    </div>
}

export default SingleMovie

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
  genres: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  budget: PropTypes.number.isRequired,
  revenue: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  tagline: PropTypes.string.isRequired

  })
})
}
