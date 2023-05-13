import React from "react"
import SingleMovie from "../Movies/SingleMovie/SingleMovie"
import "../DetailedView/DetailedView.css"

function DetailedView({
  title,posterImg,backdropImg,releaseDate,overview,
  averageRating,genres,budget,revenue,runtime,tagline, resetMainPage
}) {
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
  )
}

export default DetailedView