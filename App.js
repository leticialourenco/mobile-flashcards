import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { View, StatusBar } from 'react-native'
import { Constants } from 'expo'

import Navigation from './utils/navigation'
import initialDecks from './utils/initialDecks'
import reducer from './reducers'
import * as deckActions from './actions'

import { black } from './utils/colors'

function CustomStatusBar ({ backgroundColor, ...props }) {
    return (
        <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
            <StatusBar translucent backgroundColor={ backgroundColor } { ...props } />
        </View>
    )
}

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

export default class App extends React.Component {
    componentWillMount() {
        store.dispatch(deckActions.setDecks({ decks: initialDecks }))
    }

    render() {
        return (
            <Provider store={ store }>
                <View style={{ flex: 1 }}>
                    <CustomStatusBar backgroundColor={ black } barStyle="light-content" />
                    <Navigation style={{ flex: 1 }}/>
                </View>
            </Provider>
    )}
}
