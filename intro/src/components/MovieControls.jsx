import React from 'react'
import './MovieControls.css'
import { GoEye } from 'react-icons/go'
import { MdClose } from 'react-icons/md'
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'

const MovieControls = ({ movie }) => {
    const { removeMovieFromWatchlist } = useContext(GlobalContext)
    return (
        <div className='movie-controls'>
            <button className="ctrl-btn">
                <GoEye />
            </button>
            <button className="ctrl-btn">
                <MdClose onClick={() => removeMovieFromWatchlist(movie)} />
            </button>
        </div>
    )
}

export default MovieControls