import React from 'react';
import '../App/App.css';
import movieData from '../movieData';
import MainMovies from '../Movies/MainMovies/MainMovies';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SingleMovie from '../Movies/SingleMovie/SingleMovie';
import { fetchData } from '../apiCalls';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posters: [],
      selectedPoster: [],
      error:''
    }
  }

    componentDidMount() {
    this.getMovieData()
    }

    getMovieData() {
      fetchData()    
      .then(jsonData => {
        console.log(jsonData)
        this.setState({ posters: jsonData });
      })
      .catch(error => this.setState({error: error.message}))
  }

    // setSinglePoster = (posterId) => {
    //   const clickedPoster = this.state.posters.find((poster) => poster.id === posterId);
    //   this.setState((prevState) => ({
    //     selectedPoster: [...prevState.selectedPoster, clickedPoster],
    //   }));
    // };

    // resetMainPage = () => {
    //   this.setState({selectedPoster: []})
    // }


    render() {
      return (
        <main className="App">
          <Header />
          {/* {this.state.selectedPoster.length ? (<SingleMovie selectedPoster={this.state.selectedPoster} resetMainPage={this.resetMainPage} />) :
          (<MainMovies posters={this.state.posters} setSinglePoster={this.setSinglePoster}/>)} */}
          <MainMovies posters={this.state.posters} setSinglePoster={this.setSinglePoster}/>
          <Footer />
        </main>
      );
    }
  }

export default App;
