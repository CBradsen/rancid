import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../App/App.css';
import Header from '../Header/Header';
import { fetchData, specificData } from '../apiCalls';
import MainMovies from '../Movies/MainMovies/MainMovies';
import SingleMovie from '../Movies/SingleMovie/SingleMovie';
import Footer from '../Footer/Footer';
import ErrorPage from '../ErrorPage/ErrorPage';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posters: [],
      error: '',
      isLoading: true,
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

  sortByRating = () => {
    this.setState(prevState => {
      const jsonDataMovies = [...prevState.posters.movies]
      const sortedMovies = jsonDataMovies.sort((a, b) => b.average_rating - a.average_rating);
      return { posters: {...prevState.posters, movies: sortedMovies } };
    });
  };

  render() {
    const { error, isLoading, posters } = this.state;
    if (error) {
      return <ErrorPage />; 
    }
    if (isLoading) {
      return <h2>Loading...</h2>;
    }
    return (
      <main className="App">
        <Header resetMainPage={this.resetMainPage} />
        <Switch>
          <Route exact path="/" render={() => (
            <MainMovies posters={posters} sortByRating={this.sortByRating}  />
          )} />
    <Route path="/:id" render={({ match }) => {
            const { id } = match.params;
            const movie = posters.movies.find(movie => movie.id.toString() === id);
            return movie ? (
              <SingleMovie match={match} />
            ) : (
              <ErrorPage />
            );
          }} />
          <Route path="*" render={() => <ErrorPage />} />
        </Switch>
        <Footer />
      </main>
    );
  }
}

export default App;