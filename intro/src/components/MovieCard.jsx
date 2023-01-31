import React from 'react'
import './MovieCard.css'
import MovieControls from './MovieControls'

const MovieCard = ({ movie }) => {

  return (
    <div className='movie-card'>
      {movie.poster_path ?
        <img
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt={`${movie.poster_path}`} />
        :
        <div className='fill'></div>}
      <MovieControls movie={movie} />
    </div>
  )
}

export default MovieCard