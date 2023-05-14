//Imports
import { fetchData, specficData } from '../apiCalls';
import React from 'react';
import '../App/App.css';
import Header from '../Header/Header';
import MainMovies from '../Movies/MainMovies/MainMovies';
import SingleMovie from '../Movies/SingleMovie/SingleMovie';
import Footer from '../Footer/Footer';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posters: null,
      selectedPoster: null,
      error: '',
      isLoading: true
    };
  };

//Lifecycle Methods
  componentDidMount = () => {
    this.getMovieData();
    // this.getSpecficMovieData(593643);
  };

//Data Fetching
  getMovieData = () => {
    fetchData()
      .then(jsonData => {
        this.setState({ posters: jsonData, isLoading: false });
      })
      .catch(error => this.setState({ error: error.message }));
  };

  getSpecficMovieData = (id) => {
    specficData(id)
      .then(jsonData => {
        this.setState({ selectedPoster: jsonData, isLoading: false });
      })
      .catch(error => this.setState({ error: error.message }));
  };

//Event Handlers
  setSinglePoster = (posterId) => {
    this.getSpecficMovieData(posterId);
  };

  resetMainPage = () => {
    this.setState({ selectedPoster: null });
  };

  // Render Method
  render() {
    const { error, isLoading, selectedPoster, posters } = this.state;
    if (error) {
      return <h2>Error: {error}</h2>;
    }
    if (isLoading) {
      return <h2>Loading...</h2>;
    }
    return (
      <main className="App">
        <Header />
        {selectedPoster ? (<SingleMovie selectedPoster={selectedPoster} resetMainPage={this.resetMainPage} />) :
          (<MainMovies posters={posters} setSinglePoster={this.setSinglePoster} />)}
        <Footer />
      </main>
    );
  };
};

export default App;
