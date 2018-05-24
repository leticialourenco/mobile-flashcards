import { AsyncStorage } from 'react-native'
const STORAGE_KEY = 'flashcards:storage'

export const getDecks = () => {
    return AsyncStorage.getItem(STORAGE_KEY)
        .then(response => JSON.parse(response))
}

export const setDecks = (decks) => {
    return AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(decks))
        .then(response => JSON.parse(response))
}