import React from 'react'
import '../Poster/Poster.css'

function Poster({posterImg, posterId, posterTitle, setSinglePoster}){
  return (
    <img className="poster-img" src={posterImg} id= {posterId} alt={posterTitle} onClick={() => setSinglePoster(posterId)}/>
  )

}
export default Poster