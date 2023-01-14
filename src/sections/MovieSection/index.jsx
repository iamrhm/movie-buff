import React from "react";

import SearchMovie from "./components/SearchMovie/SearchMovie";
import GenreSuggestions from "./components/GenreSuggestions/GenreSuggestions";
import MovieResult from "./components/MovieResult/MovieResult";

import './MovieSection.css';
import { movieList, movieGenres as mockMovieGenres } from "../../__mocks__/data";

const MovieSection = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [movieGenres, setMovieGenres] = React.useState([...mockMovieGenres]);
  const [movieResults, setMovieResults] = React.useState([...movieList]);
  const [selectedGenres, setSelectedGenres] = React.useState([]);

  const addNewGenre = (genre) => {
    const newGenres = [...selectedGenres];
    newGenres.push(genre);
    setSelectedGenres(newGenres);
  };

  return (
    <div className="movie-panel-container">
      <SearchMovie
        searchQuery={ searchQuery }
        setSearchQuery={ setSearchQuery }
        showSearch
      />
      <GenreSuggestions
        movieGenres={movieGenres}
        selectedGenres={selectedGenres}
        addNewGenre={addNewGenre}
      />
      <MovieResult
        movieResults={movieResults}
        setMovieResults={setMovieResults}
      />
    </div>
  );
};

export default MovieSection;
