
export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_MOVIE_TO_WATCHLIST':
            return {
                ...state,
                watchlist: [...state.watchlist, action.payload]
            }
        case 'REMOVE_FROM_WATCHLIST':
            return {
                ...state,
                watchlist: state.watchlist.filter(movie => (
                    movie.id !== action.payload.id
                ))
            }
        default:
            return state
    }
}