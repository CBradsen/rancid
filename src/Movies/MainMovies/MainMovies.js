// Imports
import React from "react";
import PropTypes from 'prop-types';
import '../MainMovies/MainMovies.css';
import Poster from "../../Poster/Poster";

//Functions
const MainMovies = ({ posters }) =>  {
  if(!posters) {
    return [];
  }

const posterCards = posters.movies.map(({ poster_path, id, title, average_rating }) => {
  return(
    <Poster
    posterImg = {poster_path}
    posterId = {id}
    key = {id}
    posterTitle = {title}
    rating = {average_rating}
    />
  );
});
    return (
      <div className="wrapper">
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
     ),
   })
   };