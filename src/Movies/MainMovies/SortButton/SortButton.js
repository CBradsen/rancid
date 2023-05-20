import React from "react";
import "./SortButton.css";


const SortButton = ({ sortByRating }) => {
 return <button className="sort-button" onClick={ sortByRating} >Sort by Rating</button>;
}

export default SortButton;