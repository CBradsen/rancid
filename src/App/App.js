import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../App/App.css';
import Header from '../Header/Header';
import MainMovies from '../Movies/MainMovies/MainMovies';
import SingleMovie from '../Movies/SingleMovie/SingleMovie';
import Footer from '../Footer/Footer';
import { fetchData } from '../apiCalls';

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

