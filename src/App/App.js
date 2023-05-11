import React from 'react'
import '../App/App.css'
import movieData from '../movieData'
import MainMovies from '../Movies/MainMovies/MainMovies'

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      posters: movieData.movies
    }
  }

  // componentDidMount() {
  //   this.getMovieData();
  // }

  // getMovieData() {
  //  const displayPosters = this.setState({posters: movieData.movies})
  //  return console.log(movieData)
  //   // We need to pull in the data from movieData 
  //   // and then setState 
  //   //use it in the Movies folder to have in show on the UI
  // }

  render() {
    return(
      <main>
      <h1>Hello World!</h1>
      <MainMovies posters={this.state.posters}/>
      </main>
    )
  }
}

export default App
