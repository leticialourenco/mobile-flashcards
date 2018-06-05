import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

const STORAGE_KEY = 'flashcards:storage'
const NOTIFICATION_KEY = 'flashcards:notifications'

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

export const clearLocalNotification  = () => {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}

export const createNotification = () => {
    return {
        title: 'Practice your quizzes!',
        body: "👋 Don't forget to practice your quizzes today!",
        ios: {
            sound: true
        }
    }
}

export const setLocalNotification = () => {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({ status }) => {
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync()

                            let tomorrow = new Date()
                            tomorrow.setDate(tomorrow.getDate() + 1)
                            tomorrow.setHours(19)
                            tomorrow.setMintutes(0)

                            Notifications.scheduleLocalNotificationAsync(
                                createNotification(),
                                {
                                    time: tomorrow,
                                    repeat: 'day',
                                }
                            )

                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                        }
                    })
            }
        })
}