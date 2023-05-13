import React from 'react';
import '../App/App.css';
import movieData from '../movieData';
import MainMovies from '../Movies/MainMovies/MainMovies';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SingleMovie from '../Movies/SingleMovie/SingleMovie';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posters: movieData.movies,
      selectedPoster: []
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

    setSinglePoster = (posterId) => {
      const clickedPoster = this.state.posters.find((poster) => poster.id === posterId);
      this.setState((prevState) => ({
        selectedPoster: [...prevState.selectedPoster, clickedPoster],
      }));
    };

    resetMainPage = () => {
      this.setState({selectedPoster: []})
    }


    render() {
      return (
        <main className="App">
          <Header />
          {this.state.selectedPoster.length ? (<SingleMovie selectedPoster={this.state.selectedPoster} resetMainPage={this.resetMainPage} />) :
          (<MainMovies posters={this.state.posters} setSinglePoster={this.setSinglePoster}/>)}
          <Footer />
        </main>
      );
    }
  }

export default App;
