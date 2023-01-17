import React from 'react'
import './Add.css'

const Add = () => {
  return (
    <div>
        <div className="add-page">
            <div className="container">
                <img src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/7VrRna8S3x6xbijooeBmxqvHXiu.jpg" alt="" />
                <div className="titles">
                    <h1>Welcome</h1>
                    <h2>Millions of movies, TV shows and people to discover. Explore now.</h2>
                </div>
                <input type="text" placeholder='Search for a movie,tv show,person.....' />
            </div>
        </div>
    </div>
  )
}

export default Add