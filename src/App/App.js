import React from 'react'
import '../App/App.css'
import movieData from '../movieData'
import MainMovies from '../Movies/MainMovies/MainMovies'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

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

  showSinglePoster() {
    console.log("click")
    // this.state.posters.find(poster => poster.id === id)
  }

  render() {
    return(
      <main className="App">
      <Header />
      <MainMovies posters={this.state.posters}/>
      <Footer />
      </main>
    )
  }
}

export default App
