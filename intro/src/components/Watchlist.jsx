import React from 'react'
import './Watchlist.css'
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import MovieCard from './MovieCard'

const Watchlist = (movie) => {
  const { watchlist } = useContext(GlobalContext)
  return (
    <div className='watchlist'>
      <div className="card-lists">
        <div className="heading">
          <h1>Watchlist</h1>
        </div>
        {watchlist.length > 0 && (
          <div className="movie-grid">
            {watchlist.map(movie => (
              <MovieCard movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Watchlist