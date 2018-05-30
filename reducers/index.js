import {
    GET_DECKS,
    ADD_DECK,
    ADD_QUESTION
} from '../actions'

function decks (state = { decks: {} }, action) {
    switch (action.type) {
        case GET_DECKS:
            return action.decks;

        case ADD_DECK:
            return action.title;

        case ADD_QUESTION:
            const nextState = state;
            nextState.decks[action.title].questions.push(action.question);
            return nextState;

        default:
            return state;
    }
}

export default decks