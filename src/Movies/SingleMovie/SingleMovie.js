import React from "react";
import "../SingleMovie/SingleMovie.css";
import DetailedView from "../../DetailedView/DetailedView";
import Trailers from "../../Trailers/Trailers";
import PropTypes from 'prop-types';
import { specificData } from '../../apiCalls'

class SingleMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedPoster: {},
      selectedVideos: [],
      error: '',
      isLoading: true 
    };
  }

  componentDidMount() {
    const posterId = this.props.match.params.id;
    this.getSpecificMovieData(posterId);
  }

  getSpecificMovieData = (id) => {
    specificData(id)
      .then(({ movieData, videoData }) => { 
        console.log("getSpecificMovieData", movieData, videoData);
        this.setState({
          selectedPoster: movieData,
          selectedVideos: videoData.videos.find(video => video.type === "Trailer"), 
          isLoading: false 
        });
      })
      .catch(error => this.setState({ error: error.message }));
  };

  render() {
    const { error, isLoading, selectedVideos, selectedPoster } = this.state;
    if (error) {
      return <h2>Error: {error}</h2>;
    }
    if (isLoading) {
      return <h2>Loading...</h2>;
    }
    if (!selectedPoster || !selectedPoster.movie) {
      return null;
    }
    const {
      id,
      title,
      poster_path,
      backdrop_path,
      release_date,
      overview,
      average_rating,
      genres,
      budget,
      revenue,
      runtime,
      tagline,
    } = selectedPoster.movie;


    return (
      <div className="detail-container">
        <DetailedView
          id={id}
          title={title}
          posterImg={poster_path}
          backdropImg={backdrop_path}
          releaseDate={release_date}
          overview={overview}
          averageRating={average_rating}
          genres={genres}
          budget={budget}
          revenue={revenue}
          runtime={runtime}
          tagline={tagline}
          videos={selectedVideos}
        />
      </div>
    );
  }
}

SingleMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
};

export default SingleMovie;
