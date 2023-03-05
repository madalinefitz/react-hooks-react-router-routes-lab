import React from "react";
import { actors } from "../data";

function Actors() {
  
const actorsComponents = actors.map( actor => {
  return (
      <div>
        <h2>{actor.name}</h2>
        <ul>
          {(actor.movies).map(movie => {
            return ( 
              <li>{movie}</li> )
          })}
        </ul>
      </div>
  )
})
  
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsComponents}
    </div>
  )
}

export default Actors;
