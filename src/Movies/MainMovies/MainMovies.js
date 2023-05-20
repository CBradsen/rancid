// Imports
import React from "react";
import PropTypes from 'prop-types';
import '../MainMovies/MainMovies.css';
import Poster from "../../Poster/Poster";
import SortButton from "./SortButton/SortButton"

//Functions
const MainMovies = ({ posters, sortByRating }) =>  {
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
        <SortButton sortByRating={sortByRating} />
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