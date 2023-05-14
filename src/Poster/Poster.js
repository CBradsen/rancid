import React from 'react'
import '../Poster/Poster.css'
import PropTypes from 'prop-types'

function Poster({posterImg, posterId, posterTitle, setSinglePoster}){
  return (
    <img className="poster-img" src={posterImg} id= {posterId} alt={posterTitle} onClick={() => setSinglePoster(posterId)}/>
  )

}
Poster.propTypes = {
  posterImg: PropTypes.string.isRequired,
  posterId: PropTypes.number.isRequired,
  posterTitle: PropTypes.string.isRequired,
  setSinglePoster: PropTypes.func.isRequired
}
export default Poster