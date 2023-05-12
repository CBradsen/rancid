import React from "react";
import '../MainMovies/MainMovies.css'
import Poster from "../../Poster/Poster";

function MainMovies ({posters, showSinglePoster}) {

const posterCards = posters.map(poster => {
  return(
    <Poster
    posterImg = {poster.poster_path}
    posterId = {poster.id}
    posterKey = {poster.id}
    posterTitle = {poster.title}
    showSinglePoster = {showSinglePoster}
    />
  )
})
  
    return (
      <div className="poster-container">
     {posterCards}
      </div>)
  }


export default MainMovies