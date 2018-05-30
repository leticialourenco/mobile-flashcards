import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { lightGray, mediumGray } from '../utils/colors'

class DeckSingle extends Component {
    render() {
        const { title, questions } = this.props.navigation.state.params;

        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>
                    { title }
                </Text>

                <Text style={styles.counter}>
                    { questions.length > 0 ? `${questions.length}` : 'no' }
                    { questions.length !== 1 ? ' questions' : ' question' }
                </Text>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('NewQuestion', { title })}
                    style={styles.button}
                >
                    <Text>Add a Question</Text>
                </TouchableOpacity>

                { (questions.length > 0) ?
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Quiz', { questions: questions , score: 0, key: 0, deckKey: title })}
                        style={styles.button}
                    >
                        <Text>Start Quiz</Text>
                    </TouchableOpacity>

                    :

                    <TouchableOpacity
                        style={[styles.disabled,styles.button]}
                        disabled={true}
                    >
                        <Text>Start Quiz</Text>
                    </TouchableOpacity>
                }

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'top',
        paddingTop: 50,
        paddingLeft: 20,
        paddingRight: 20,
    },
    titleText: {
        marginTop: 30,
        marginBottom: 10,
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
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
    },
    disabled: {
        opacity: .5,
    },
    counter: {
        marginBottom: 50,
    }
})

export default DeckSingle