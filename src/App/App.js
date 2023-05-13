import React from 'react';
import '../App/App.css';
import movieData from '../movieData';
import MainMovies from '../Movies/MainMovies/MainMovies';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SingleMovie from '../Movies/SingleMovie/SingleMovie';
import { fetchData, specficData } from '../apiCalls';


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
        console.log(jsonData)
        this.setState({ posters: jsonData, isLoading: false });
      })
      .catch(error => this.setState({error: error.message}))
  }

  getSpecficMovieData(id) {
    specficData(id)
    .then(jsonData => {
      console.log(jsonData)
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
      if (this.state.isLoading) {
        return <div>Loading...</div>;
      }
      if (this.state.error) {
        return <div>Error: {this.state.error}</div>;
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
