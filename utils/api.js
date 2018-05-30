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

export const addDeckTitle = (title) => {
    return getDecks().then((data) => {
        data.decks[title] = { questions: [], title };

        AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))

        return AsyncStorage.getItem(STORAGE_KEY)
            .then(response => JSON.parse(response))
    })
}

export const addCardToDeck = ({ title, question }) => {
    return getDecks().then((data) => {
        data.decks[title].questions.push(question);

        AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
            .then(response => JSON.parse(response))
    })
}