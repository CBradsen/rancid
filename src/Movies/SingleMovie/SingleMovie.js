import React from "react"
import "../SingleMovie/SingleMovie.css"
import DetailedView from "../../DetailedView/DetailedView"

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