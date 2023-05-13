import React from 'react'
import '../App/App.css'
import movieData from '../movieData'
import MainMovies from '../Movies/MainMovies/MainMovies'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SingleMovie from '../Movies/SingleMovie/SingleMovie'


class App extends React.Component{
  constructor() {
    super()
    this.state = {
      posters: movieData.movies,
      selectedPoster: {id: 1, 
  title: "Fake Movie Title", 
  poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg", 
  backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg", 
  release_date: "2019-12-04", 
  overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!", 
  average_rating: 6, 
  genres: ["Drama"], 
  budget:63000000, 
  revenue:100853753, 
  runtime:139, 
  tagline: "It's a movie!" }

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

  setSinglePoster = (posterId) => { 
    const clickedPoster = this.state.posters.find(poster => poster.id === posterId)
    
    this.setState({ selectedPoster: clickedPoster }) }
    
 
  render() {
    // selectedPoster && return (
    //   <main className="App">
    //   <Header />
    //   <SingleMovie selectedPoster={this.state.selectedPoster} setSinglePoster={this.showSinglePoster} findMovieData={findMovieData} />
    //   <Footer />
    //   </main>
    // )

    return(
      <main className="App">
      <Header />
      <SingleMovie  selectedPoster={this.state.selectedPoster} />
      {/* <MainMovies posters={this.state.posters} setSinglePoster={this.setSinglePoster}/> */}
      <Footer />
      </main>
    )
  }
}

export default App


// <header>
//           {/* Render your header component */}
//           <h1>Header</h1>
//         </header>

//         {selectedMovieId ? (
//           <MovieDetails
//             movie={movies.find(movie => movie.id === selectedMovieId)}
//           />
//         ) : (
//           <MovieGrid
//             movies={movies}
//             onClick={(movieId) => this.handleClick(movieId)}
//           />
//         )}

//         <footer>
//           {/* Render your footer component */}
//           <p>Footer</p>
//         </footer>
//       </div>
//     );
//   }
// }