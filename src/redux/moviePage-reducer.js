const ADD_FILM = 'ADD-FILM';

let initialState = {
    films: [JSON.parse(localStorage.getItem('film'))],
}


export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FILM:
            return { ...state, films: [action.payload] };

        default:
            return state;
    }
}

export const AddFilmCreator = (film) => ({ type: ADD_FILM, payload: film });