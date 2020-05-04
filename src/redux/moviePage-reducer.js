const ADD_FILM = 'ADD-FILM';

let initialState = {
    films: [JSON.parse(localStorage.getItem('film'))],
    newFilm: '',
}


export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FILM:
            let filmToAdd = state.newFilm;
            state.films[0] = filmToAdd;
            return state;

        default:
            return state;
    }
}

export const AddFilmCreator = (film) => ({ type: ADD_FILM, film: film });