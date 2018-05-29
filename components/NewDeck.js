import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import * as deckActions from '../actions'
import { mediumGray, lightGray } from '../utils/colors'

class NewDeck extends Component {
    state = {
        title: ''
    }

    submitNewDeck = () => {
        this.props.actions.addDeck(this.state.title);
        this.props.navigation.navigate('DeckList');
        this.setState({ title: '' });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>
                    Title
                </Text>

                <TextInput
                    style={styles.input}
                    value={ this.state.title }
                    onChangeText={ (title) => this.setState({ title }) }
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={ () => { this.submitNewDeck() }}
                >
                    <Text>Create Deck</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'top',
        paddingTop: 50,
        paddingLeft: 20,
        paddingRight: 20,
    },
    label: {
        marginBottom: 0,
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        alignSelf: 'stretch',
        borderColor: mediumGray,
        borderBottomStyle: 'solid',
        borderBottomWidth: '.3',
    },
    button: {
        alignSelf: 'stretch',
        marginTop: 15,
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: lightGray,
        alignItems: 'center',
        borderRadius: 5,
        shadowColor: mediumGray,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 2,
        shadowOpacity: .2,
    }
})

const mapStateToProps = (state) => { return {} }

function mapDispatchToProps (dispatch) {
    return {
        actions: {
            addDeck: (title) => dispatch(deckActions.addDeck(title))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewDeck)