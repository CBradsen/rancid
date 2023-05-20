import React from "react";
import { Link } from 'react-router-dom';
import Poster from "../../Poster/Poster"
import "..Sort/Sort.css";


const SortedMovies = ({posters}) => {

  const highestToLowRating = posters.movies.sort((a, b) => {
    return a.average_rating - b.average_rating
  })
  console.log(highestToLowRating)
}

 return (
      <div className="wrapper">
        <div className="poster-container">
          {posterCards}
        </div>
      </div>);

export default SortedMovies;