import React from 'react'
import { View, StatusBar } from 'react-native'
import { Constants } from 'expo'
import { createBottomTabNavigator, StackNavigator } from 'react-navigation'
import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'
import { white, blue, black } from './utils/colors'

function CustomStatusBar ({backgroundColor, ...props}) {
    return (
        <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
    )
}

const Tabs = createBottomTabNavigator({
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
        activeTintColor: blue,
        style: {
            height: 40,
            backgroundColor: white,
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowOffset: {
                width: 0,
                height: 6
            },
            shadowRadius: 10,
            shadowOpacity: 1,
            fontWeight: 500,
        }
    }
})

const MainNavigator = StackNavigator({
    Home: {
        screen: Tabs,
    }
})

export default class App extends React.Component {
  render() {
    return (
        <View style={{flex: 1}}>
            <CustomStatusBar backgroundColor={black} barStyle="light-content" />
            <MainNavigator />
        </View>
    )
  }
}
