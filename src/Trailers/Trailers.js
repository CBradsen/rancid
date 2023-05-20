import React from "react";
import "../Trailers/Trailers.css";
import PropTypes from "prop-types"; 

const Trailers = ({ trailerId }) => ( 
  <div className="trailers">
<iframe
  width="100%"
  height="100%"
  src={`https://www.youtube.com/embed/${trailerId}`}
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  title="youtube"
/>
  </div>
);

Trailers.propTypes = {
  trailerId: PropTypes.string.isRequired 
};

export default Trailers;