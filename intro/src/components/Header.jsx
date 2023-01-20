import React from 'react'
import './header.css'
import { BsPlusLg } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">
                        <Link to={'/Watchlist'}>Watchlist</Link>
                    </div>

                    <ul className="nav-links">
                        <li>
                            <Link to={'/Watched'}>Watched</Link>
                        </li>
                        <li>
                            <Link to={'/Add'} className='btn'><BsPlusLg /></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header