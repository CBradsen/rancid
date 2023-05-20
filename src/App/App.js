import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../App/App.css';
import Header from '../Header/Header';
import { fetchData } from '../apiCalls';
import MainMovies from '../Movies/MainMovies/MainMovies';
import SingleMovie from '../Movies/SingleMovie/SingleMovie';
import Footer from '../Footer/Footer';


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
    console.log("state of posters begin of sort", this.state.posters)

    this.setState(prevState => {
      const jsonDataMovies = [...prevState.posters.movies]
      const sortedMovies = jsonDataMovies.sort((a, b) => b.average_rating - a.average_rating);
    return { posters: {...prevState.posters, movies: sortedMovies } };
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
        <body>
          <Switch>
            <Route exact path="/" render={() => (
              <MainMovies posters={posters} sortByRating={this.sortByRating}/> )} />
            <Route path="/:id" render={({ match }) => ( <SingleMovie match={match} />)} />
            <Route path="*" render={() => <h2>Error: Page not found</h2>} />
          </Switch>
        </body>
        <Footer />
      </main>
    );
  }
}

export default App;

