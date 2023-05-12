import React from 'react'
import '../Poster/Poster.css'

function Poster({posterImg, posterId, posterTitle, showSinglePoster}){
  return (
    <img className="poster-img" src={posterImg} id= {posterId} alt={posterTitle} onClick={() => showSinglePoster()}/>
  )

}
export default Poster