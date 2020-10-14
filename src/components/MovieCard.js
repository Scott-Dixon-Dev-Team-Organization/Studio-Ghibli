import React from "react";

const MovieCard = props => {
  return (
    <div className="film-list">
      <h2>Film title: {props.title}</h2>
      <p>{props.description}</p>
      <div className="bottom">
        <p>Director: {props.director}</p>
        <p>Release Date: {props.release_date}</p>
      </div>
    </div>
  );
};
export default MovieCard;
