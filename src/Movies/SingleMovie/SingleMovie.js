import React from "react"
import "../SingleMovie/SingleMovie.css"
import DetailedView from "../../DetailedView/DetailedView"

function SingleMovie({ selectedPoster, resetMainPage }) {
  const singleMovieDisplay = selectedPoster.map((detail) => {
    return (
      <DetailedView
        id={detail.id}
        title={detail.title}
        posterImg={detail.poster_path}
        backdropImg={detail.backdrop_path}
        releaseDate={detail.release_date}
        overview={detail.overview}
        averageRating={detail.average_rating}
        genres={detail.genres}
        budget={detail.budget}
        revenue={detail.revenue}
        runtime={detail.runtime}
        tagline={detail.tagline}
        key={detail.id}
        resetMainPage={resetMainPage}
      />
    )
  })
  return <div className="detail-container">
    {singleMovieDisplay}
    </div>
}

export default SingleMovie