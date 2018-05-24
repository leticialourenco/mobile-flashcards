import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { View, StatusBar } from 'react-native'
import { Constants } from 'expo'
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation'

import reducer from './reducers'
import * as deckActions from './actions'
import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'
import DeckSingle from './components/DeckSingle'
import NewQuestion from './components/NewQuestion'
import Quiz from './components/Quiz'

import { white, lightGray, mediumGray, blue, black } from './utils/colors'

function CustomStatusBar ({backgroundColor, ...props}) {
    return (
        <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
    )
}

const Tabs = createMaterialTopTabNavigator({
    DeckList: {
        screen: DeckList,
        navigationOptions: {
            tabBarLabel: 'Decks'
        }
    },
    NewDeck: {
        screen: NewDeck,
        navigationOptions: {
            tabBarLabel: 'New Deck'
        }
    }
}, {
    navigationOptions: {
        header: null
    },
    tabBarOptions: {
        activeTintColor: black,
        labelStyle: {
            fontSize: 12,
            letterSpacing: 1,
            color: black,
        },
        style: {
            tintColor: black,
            backgroundColor: lightGray,
            shadowColor: mediumGray,
            shadowOffset: {
                width: 0,
                height: 6
            },
            shadowRadius: 10,
            shadowOpacity: .2,
        }
    }
})

const MainNavigator = createStackNavigator({
    Home: {
        screen: Tabs,
    },
    NewDeck: {
        screen: NewDeck,
    },
    DeckSingle: {
        screen: DeckSingle,
    },
    NewQuestion: {
        screen: NewQuestion,
    },
    Quiz: {
        screen: Quiz,
    },
})

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

export default class App extends React.Component {

    componentWillMount() {
        store.dispatch(deckActions.setDecks({decks:initialDecks}))
    }

    render() {
        return (
            <Provider store={store}>
                <View style={{flex: 1}}>
                    <CustomStatusBar backgroundColor={black} barStyle="light-content" />
                    <MainNavigator />
                </View>
            </Provider>
    )}
}


const initialDecks = {
    React: {
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            }
        ]
    },
    JavaScript: {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    },
    Redux: {
        title: 'Redux',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            }
        ]
    },
    Angular: {
        title: 'Angular',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    },
    nana: {
        title: 'Nana',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            }
        ]
    },
    tata: {
        title: 'Tata',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    }
}
