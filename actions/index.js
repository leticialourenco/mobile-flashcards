import * as STORAGE from '../utils/api'

export const GET_DECKS = 'GET_DECKS';
export const SET_DECKS = 'SET_DECKS';
export const SET_DECK = 'SET_DECK';
export const ADD_QUESTION = 'ADD_QUESTION';

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

export function setDeckAction (decks) {
    return {
        type: SET_DECK,
        decks
    }
} export const addDeck = (title) => dispatch => (
  STORAGE.addDeckTitle(title)
      .then(response => dispatch(setDeckAction(response)))
);




export function addQuestionAction ({ title, question }) {
    return {
        type: ADD_QUESTION,
        title,
        question
    }
} export const addQuestion = ({ title, question }) => dispatch => (
    STORAGE.addCardToDeck({ title, question })
        .then(() => dispatch(addQuestionAction({ title, question })))
);