// import React from "react";


// const MovieCard = ({ movie }) => {
//     return(
//         <div className="movie">
//             <dive>
//                 <p>{movie.Year}</p>
//             </dive>
//             <dive>
//                 <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https.//via.placeholder.com/400'} alt={movie.Title} />
//             </dive>
//             <dive>
//                 <span>{movie.Type}</span>
//                 <h3>{movie.Title}</h3>
//             </dive>
//         </div>
//     )
// }

// export default MovieCard;

import React from 'react';

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className="movie" key={imdbID}>
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;
