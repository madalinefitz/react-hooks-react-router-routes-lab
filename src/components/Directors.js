import React from "react";
import { directors } from "../data";

function Directors() {
  
const directorsComponent = directors.map(director => {
  return (
    <div>
      <h2>{director.name}</h2>
      <ul> Movies:
        {(director.movies).map(movie => {
          return (
            <li>{movie}</li>
          )
        })}
      </ul>
    </div>
  )
})
  
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsComponent}
    </div>
  )
}

export default Directors;
