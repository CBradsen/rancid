// Imports
import React from "react";
import PropTypes from 'prop-types';
import '../MainMovies/MainMovies.css';
import Poster from "../../Poster/Poster";

//Functions
const MainMovies = ({ posters, setSinglePoster }) =>  {
const posterCards = posters.movies.map(({ poster_path, id, title }) => {
  return(
    <Poster
    posterImg = {poster_path}
    posterId = {id}
    key = {id}
    posterTitle = {title}
    setSinglePoster = {setSinglePoster}
    />
  );
});
    return (
      <div class="wrapper">
        <div className="poster-container">
          {posterCards}
        </div>
      </div>);
  };

  export default MainMovies;

//PropTypes
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
   };