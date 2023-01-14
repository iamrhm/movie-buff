import React from "react";

import "./GenreSuggestions.css";

const randomColors = [
  "#E5C4FA",
  "#FECEB3",
  "#FFE8B3",
  "#DBEFC4",
  "#C6F2D6",
  "#C0EFE9",
  "#B2ECFF",
  "#C8CEFE",
  "#E5C4FB",
  "#FECEB3",
  "#FEB2B7"
];
const GenreSuggestions = ({
  movieGenres = [],
  selectedGenres = [],
  addNewGenre = () => {}
}) => {
  return (
    <div className="genre-suggestion-list">
      {movieGenres.map((data) => {
        const isSelected = selectedGenres.find((g) => g.id === data.id);
        const bgColor = randomColors[Math.floor(Math.random()*randomColors.length)];
        return (
          <span
            className={`genre-suggestion-tile ${isSelected ? "active" : ""}`}
            key={data.id}
            onClick={ () => addNewGenre(data) }
            style={ {
              backgroundColor: bgColor,
            }}
          >
            {data.name}
          </span>
        );
      })}
    </div>
  );
};

export default GenreSuggestions;
