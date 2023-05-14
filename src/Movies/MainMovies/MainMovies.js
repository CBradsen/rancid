import React from "react";
import '../MainMovies/MainMovies.css'
import Poster from "../../Poster/Poster";
import PropTypes from 'prop-types';

function MainMovies ({posters, setSinglePoster}) {


const posterCards = posters.movies.map(poster => {
  return(
    <Poster
    posterImg = {poster.poster_path}
    posterId = {poster.id}
    key = {poster.id}
    posterTitle = {poster.title}
    setSinglePoster = {setSinglePoster}
    />
  )
})
  
    return (
      <div className="poster-container">
        {posterCards}
      </div>)
  }

  
  
  export default MainMovies
  MainMovies.propTypes = {
   posters: PropTypes.shape({
     movies: PropTypes.arrayOf(
       PropTypes.shape({
        poster_path: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
 
       })
     ).isRequired,
   }).isRequired,
   setSinglePoster: PropTypes.func
   }