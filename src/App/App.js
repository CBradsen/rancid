import { fetchData, specficData } from '../apiCalls';
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
      posters: null,
      selectedPoster: null,
      error:'',
      isLoading: true
    }
  }

    componentDidMount() {
    this.getMovieData()
    }

    getMovieData() {
      fetchData()    
      .then(jsonData => {
        this.setState({ posters: jsonData, isLoading: false });
      })
      .catch(error => this.setState({error: error.message}))
  }

  getSpecficMovieData(id) {
    specficData(id)
    .then(jsonData => {
      this.setState({ selectedPoster: jsonData, isLoading: false })
    })
    .catch(error => this.setState({error: error.message}))
  } 

    setSinglePoster = (posterId) => {
      this.getSpecficMovieData(posterId)
    };

    resetMainPage = () => {
      this.setState({selectedPoster: null})
    }

    render() {
      if (this.state.error) {
        return <h2>Error: {this.state.error}</h2>;
      }
      if (this.state.isLoading) {
        return <h2>Loading...</h2>;
      }
      return (
        <main className="App">
          <Header />
          {this.state.selectedPoster ? (<SingleMovie selectedPoster={this.state.selectedPoster} resetMainPage={this.resetMainPage} />) : 
          (<MainMovies posters={this.state.posters} setSinglePoster={this.setSinglePoster}/>)}
          <Footer />
        </main>
      );
    }
  }

export default App;
