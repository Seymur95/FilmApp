import { useReducer } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import {AppReducer} from "./AppReducer";

export const GlobalContext = createContext();

const initialState = {
    watchlist: localStorage.getItem('watchlist') ?
        JSON.parse(localStorage.getItem('watchlist')) : []
}

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist))
    }, [state])

    const addMovieToWatchlist = (movie) => {
        dispatch({ type: 'ADD_MOVIE_TO_WATCHLIST', payload: movie })
    }

    const removeMovieFromWatchlist = (movie) => {
        dispatch({ type: 'REMOVE_FROM_WATCHLIST', payload: movie })
    }

    return <GlobalContext.Provider
        value={{
            watchlist: state.watchlist,
            addMovieToWatchlist, removeMovieFromWatchlist
        }}>
        {children}
    </GlobalContext.Provider>
}