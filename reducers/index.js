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
            return {
                ...state,
                decks: {
                    ...state.decks,
                    [action.title] : {
                        ...state.decks[action.title],
                        questions: state.decks[action.title].questions.concat([action.question])
                    },
                }
            };

        default:
            return state;
    }
}

export default decks