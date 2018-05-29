import React from 'react'
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation'

import DeckList from '../components/DeckList'
import NewDeck from '../components/NewDeck'
import DeckSingle from '../components/DeckSingle'
import NewQuestion from '../components/NewQuestion'
import Quiz from '../components/Quiz'
import QuizResult from '../components/QuizResult'

import { white, lightGray, mediumGray, black } from './colors'

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
    }}, {
    tabBarOptions: {
        labelStyle: {
            fontSize: 13,
            letterSpacing: 1,
            color: black,
            fontWeight: 'bold',
        },
        indicatorStyle: {
            backgroundColor: mediumGray,
        },
        style: {
            paddingTop: 5,
            paddingBottom: 5,
            tintColor: black,
            backgroundColor: white,
            shadowColor: mediumGray,
            shadowOffset: {
                width: 0,
                height: 6
            },
            shadowRadius: 10,
            shadowOpacity: .2,
        },
    }
})

const Navigation = createStackNavigator({
    Home: {
        screen: Tabs,
        navigationOptions: ({ header: null }),
    },
    NewDeck: {
        screen: NewDeck,
        navigationOptions: ({ header: null }),
    },
    DeckSingle: {
        screen: DeckSingle,
        navigationOptions: ({ navigation }) => ({
            title: navigation.state.params.title,
            headerTitleStyle: {
                fontWeight: 'bold',
                color: black,
                fontSize: 17,
            },
            headerTintColor: black,
            headerStyle: {
                backgroundColor: lightGray,
            },
        }),
    },
    NewQuestion: {
        screen: NewQuestion,
        navigationOptions: ({
            title: 'New Question',
            headerTitleStyle: {
                fontWeight: 'bold',
                color: black,
                fontSize: 17,
            },
            headerTintColor: black,
            headerStyle: {
                backgroundColor: lightGray,
            },
        }),
    },
    Quiz: {
        screen: Quiz,
        navigationOptions: ({
            title: 'Quiz',
            headerTitleStyle: {
                fontWeight: 'bold',
                color: black,
                fontSize: 17,
            },
            headerTintColor: black,
            headerStyle: {
                backgroundColor: lightGray,
            },
        }),
    },
    QuizResult: {
        screen: QuizResult,
        navigationOptions: ({
            title: 'Result',
            headerTitleStyle: {
                fontWeight: 'bold',
                color: black,
                fontSize: 17,
            },
            headerTintColor: black,
            headerStyle: {
                backgroundColor: lightGray,
            },
            headerLeft: null
        }),
    },
})

export default Navigation