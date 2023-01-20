import React from 'react'
import { useState } from 'react'
import './Add.css'
import Carts from './Carts'

const Add = () => {
    const [results, setResults] = useState([])

    const onChange = (e) => {
        fetch(`
        https://api.themoviedb.org/3/search/movie?api_key=3e49e9c03dfcb325e7083697fb6ce258&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
            .then(response => response.json()).then(data => {
                if (!data.errors) {
                    setResults(data.results)
                } else {
                    setResults([])
                }
            })
    }

    return (
        <div>
            <div className="container">
                <div className="add-page">
                    <img src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/7VrRna8S3x6xbijooeBmxqvHXiu.jpg" alt="" />
                    <div className="titles">
                        <h1>Welcome</h1>
                        <h2>Millions of movies, TV shows and people to discover. Explore now.</h2>
                    </div>
                    <input type="text" onChange={onChange} placeholder='Search for a movie,tv show,person.....' />

                    {results.length > 0 && (
                        <ul>
                            {results.map(movie => (
                                <li key={movie.id}>
                                    <Carts movie={movie} />
                                </li>
                            ))}
                        </ul>
                    )}

                </div>
            </div>
        </div>
    )
}

export default Add