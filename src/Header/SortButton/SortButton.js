import React from "react";
// import "..SortButton/SortButton.css";


const SortButton = ({ sortByRating }) => {
 return <button onClick={ sortByRating} >Sort by Rating</button>;
}

export default SortButton;