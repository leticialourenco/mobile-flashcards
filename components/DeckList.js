import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import * as deckActions from '../actions'
import { lightGray, white, mediumGray } from '../utils/colors'

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
                       <Text style={styles.deckTitle}>
                           { decks[key].title }
                       </Text>

                       <Text>
                           <Text style={styles.deckCounter}>
                               { decks[key].questions.length > 0 ? `${decks[key].questions.length}` : 'no' }
                           </Text>
                           { decks[key].questions.length !== 1 ? ' questions' : ' question'}
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
        paddingTop: 20,
    },
    deckCard: {
        flex: 1,
        height: 100,
        width: 330,
        margin: 15,
        marginBottom: 5,
        backgroundColor: lightGray,
        borderRadius: 5,
        shadowColor: mediumGray,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 2,
        shadowOpacity: .2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    deckTitle: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    deckCounter: {
        fontSize: 12,
        fontWeight: 'bold',
    },
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