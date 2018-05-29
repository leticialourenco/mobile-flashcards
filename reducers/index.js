import {
    GET_DECKS,
    SET_DECK
} from '../actions'

function decks (state = { decks: {} }, action) {
    switch (action.type) {
        case GET_DECKS:
        case SET_DECK:
            return action.decks;

        default:
            return state;
    }
}

export default decks