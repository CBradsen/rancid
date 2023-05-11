import React from 'react'
import '../Poster/Poster.css'
function Poster({posterImg}){
  return (
    <img className="poster-img" src={posterImg} />
  )

}
export default Poster