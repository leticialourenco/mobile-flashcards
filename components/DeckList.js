import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import * as deckActions from '../actions'
import { lightGray, white } from '../utils/colors'

class DeckList extends Component {
    componentWillMount () {
        this.props.actions.getDecks();
    }

    render() {
        const { decks } = this.props;

        return (
            <ScrollView style={styles.deckContainer}>
                { Object.keys(decks).map((key) =>
                   <TouchableOpacity
                       key={key}
                       onPress={() => this.props.navigation.navigate('DeckSingle', { ...decks[key] })}
                       style={styles.deckCard}
                   >
                       <Text>{ decks[key].title }</Text>
                       <Text>
                           { decks[key].questions.length }
                           { decks[key].questions.length > 1 ? " cards" : " card"}
                       </Text>
                   </TouchableOpacity>
               )}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    deckContainer: {
        flex: 1,
        backgroundColor: white,
        alignItems: 'center',
    },
    deckCard: {
        flex: 1,
        backgroundColor: lightGray,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        marginTop: 20,
        marginBottom: 5,
        alignSelf: 'stretch',
        height: 100
    }
})

function mapStateToProps (state) {
    return {
        decks: state.decks
    }
}

function mapDispatchToProps (dispatch) {
    return {
        actions: {
            getDecks: () => dispatch(deckActions.getDecks())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckList)