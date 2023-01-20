import React from 'react'
import './Carts.css'

const Carts = ({ movie }) => {
  console.log(movie)
  return (
    <div className='carts'>
      <div className="poster-wrapper">
        {movie.poster_path ?
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={`${movie.poster_path}`} />
          :
          <div className='fill'></div>}
      </div>

      <div className="info">
        <div className="texts">
          <h3 className='title'>
            {movie.title ? movie.title : '-'}
          </h3>
          <h4 className='release_date'>
            {movie.release_date ? movie.release_date.substring(0,4) : '-'}
          </h4>
          <h4 className='vote_average'>
            IMDb: <strong>{movie.vote_average ? movie.vote_average : '-'}</strong>
          </h4>
        </div>
        <div className="controls">
          <button>Add to Whatchlist</button>
          <button>Add to Watched</button>
        </div>
      </div>
    </div>
  )
}

export default Carts