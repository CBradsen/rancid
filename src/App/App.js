import { fetchData, specificData } from '../apiCalls';
import React from 'react';
import '../App/App.css';
import Header from '../Header/Header';
import MainMovies from '../Movies/MainMovies/MainMovies';
import SingleMovie from '../Movies/SingleMovie/SingleMovie';
import Footer from '../Footer/Footer';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posters: [],
      selectedPoster: {},
      error: '',
      isLoading: true
    };
  }

  componentDidMount() {
    this.getMovieData();
  }

  getMovieData = () => {
    fetchData()
      .then(jsonData => {
        this.setState({ posters: jsonData, isLoading: false });
      })
      .catch(error => this.setState({ error: error.message }));
  };

  getSpecificMovieData = (id) => {
    specificData(id)
      .then(jsonData => {
        console.log("getSpecificMovieData",jsonData)
        this.setState({ selectedPoster: jsonData, isLoading: false });
      })
      .catch(error => this.setState({ error: error.message }));
  };

  setSinglePoster = (posterId) => {
    this.getSpecificMovieData(posterId);
  };

  resetMainPage = () => {
    this.setState({ selectedPoster: {} });
  };

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
        <Header resetMainPage={this.resetMainPage} />
        <Switch>
          <Route exact path="/" render={() => (
            <MainMovies posters={posters} setSinglePoster={this.setSinglePoster} />
          )} /> 
          <Route path="/:id" render={({ match }) => (
          <SingleMovie selectedPoster={selectedPoster} resetMainPage={this.resetMainPage} match={match}/>)} />
          <Route path="*"render={() => <h2>Error: Page not found</h2>} />
        </Switch>
        <Footer />
      </main>
    );
  }
}

export default App;
