import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../App/App.css';
import Header from '../Header/Header';
import { fetchData } from '../apiCalls';
import MainMovies from '../Movies/MainMovies/MainMovies';
import SingleMovie from '../Movies/SingleMovie/SingleMovie';
import Footer from '../Footer/Footer';
import SortButton from '../Header/SortButton/SortButton';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posters: [],
      sortedMovies: [],
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
        console.log("Is this an array? Json", jsonData)
        this.setState({ posters: jsonData, isLoading: false });
      })
      .catch(error => this.setState({ error: error.message }));
  };

  sortByRating = () => {
    console.log("state of posters begin of sort", this.state.posters)

    this.setState(prevState => {
      const jsonDataMovies = [...prevState.posters.movies]
      const sortedMovies = jsonDataMovies.sort((a, b) => a.average_ratings - b.average_ratings);
    return { posters: sortedMovies };
    });
  };
   
  render() {
    const { error, isLoading, posters } = this.state;
    if (error) {
      return <h2>Error: {error}</h2>;
    }
    if (isLoading) {
      return <h2>Loading...</h2>;
    }
    return (
      <main className="App">
        <Header resetMainPage={this.resetMainPage} />
        <SortButton sortByRating={this.sortByRating} />
        <Switch>
          <Route exact path="/" render={() => (
            <MainMovies posters={posters}  />
          )} />
          <Route path="/:id" render={({ match }) => (
            <SingleMovie
              match={match}
            />
          )} />
          <Route path="*" render={() => <h2>Error: Page not found</h2>} />
        </Switch>
        <Footer />
      </main>
    );
  }
}

export default App;

