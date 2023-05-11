import React from "react";
import '../MainMovies/MainMovies.css'
import Poster from "../../Poster/Poster";

function MainMovies ({posters}) {

const posterCards = posters.map(poster => {
  return(
    <Poster
    posterImg = {poster.poster_path}
    />
  )
})
  
    return (
      <div className="poster-container">
     {posterCards}
      </div>)
  }


export default MainMovies