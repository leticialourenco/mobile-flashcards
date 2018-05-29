import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { mediumGray, lightGray } from '../utils/colors'

class QuizResult extends Component {
    render() {
        const { score, length } = this.props.navigation.state.params;

        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>
                    SCORE
                </Text>

                <Text style={styles.result}>
                    { (score/length) * 100 }
                    <Text style={styles.resultSign}>
                        %
                    </Text>
                </Text>

                <Text style={styles.message}>
                { (((score/length) * 100) >= 90) ? 'congratulations! 🤩' : 'keep practicing! 👍' }
                </Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('DeckList')}
                >
                    <Text>Back to decks</Text>
                </TouchableOpacity>
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
        fontSize: 14,
        letterSpacing: 1,
        fontWeight: '100',
        opacity: .7,
    },
    result: {
        marginBottom: 30,
        fontSize: 35,
        fontWeight: 'bold',
    },
    resultSign: {
        fontSize: 15,
    },
    message: {
        fontWeight: 'bold',
        marginBottom: 60,
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

export default QuizResult