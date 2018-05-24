import * as STORAGE from '../utils/api'

export const GET_DECKS = 'GET_DECKS';
export const SET_DECKS = 'SET_DECKS';

export function getDecksAction (decks) {
    return {
        type: GET_DECKS,
        decks
    }
} export const getDecks = () => dispatch => (
    STORAGE.getDecks()
        .then(response => dispatch(getDecksAction(response)))
);

export function setDecksAction (decks) {
    return {
        type: SET_DECKS,
        decks
    }
} export const setDecks = (decks) => dispatch => (
    STORAGE.setDecks(decks)
        .then(response => dispatch(setDecksAction(response)))
);