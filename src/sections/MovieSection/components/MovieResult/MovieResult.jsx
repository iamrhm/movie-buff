import React from 'react';

import './MovieResult.css';

const MovieResult = ({
  movieResults = [],
  setMovieResults = () => {},
}) => {
  return (
    <div className="movie-results-list">
      {
        movieResults.map(movie => (
          <div className="movie-results" key={ movie.id }>
            <div className="movie-image-box" />
            <div className="movie-info">
              <div className="movie-title">{ movie.title }</div>
              <div className="movie-description">{movie.tagline}</div>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default MovieResult;
