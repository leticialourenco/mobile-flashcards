import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import FlipCard from 'react-native-flip-card'
import { white, black , lightGray, mediumGray } from '../utils/colors'

class Quiz extends Component {
    handleAnswer = (answerType, questions, score, key) => {

        if (answerType) { score = score + 1 }

        if ((key + 1) === questions.length) {
            const { deckKey } = this.props.navigation.state.params;
            this.props.navigation.navigate('QuizResult', { score, length: questions.length, deckKey });
        } else {
            this.props.navigation.navigate('Quiz', { questions, score, key: key + 1 });
        }

        /* TODO: cancel notifications for today
         */
    }

    render() {
        const { questions, key, score } = this.props.navigation.state.params;

        return (
            <ScrollView style={styles.container}>

                <Text style={{ textAlign: 'center' }}>
                    Question { key + 1 } of { questions.length }
                </Text>

                <View>
                    <FlipCard
                        style={styles.flipCard}
                        friction={6}
                        perspective={1000}
                        flipHorizontal={true}
                        flipVertical={false}
                        alignHeight={true}
                        alignWidth={true}
                        flip={false}
                        clickable={true}
                    >
                        <View style={styles.card}>
                            <Text style={styles.face}>
                                { questions[key].question }
                            </Text>
                        </View>

                        <View style={styles.card}>
                            <Text style={styles.back}>
                                { questions[key].answer }
                            </Text>
                        </View>
                    </FlipCard>
                </View>

                <View style={styles.hint}>
                    <Text style={styles.hintText}>
                        hint: tap card to show or hide answer
                        {/* TODO: exchange for a button to flip the card
                         */}
                    </Text>
                </View>


                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { this.handleAnswer(true, questions, score, key)} }
                >
                    <Text>Correct 👏</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, {marginBottom: 100}]}
                    onPress={() => { this.handleAnswer(false, questions, score, key)} }
                >
                    <Text>Incorrect 👎</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'top',
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
    },
    flipCard: {
        minHeight: 200,
        marginTop: 30,
        marginBottom: -235,
        borderWidth: 0,
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 30,
        paddingBottom: 30,
        borderRadius: 5,
        borderWidth: 0,
        backgroundColor: black,
        shadowColor: mediumGray,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 2,
        shadowOpacity: .5,
    },
    face: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: white,
    },
    back: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        color: white,
    },
    button: {
        alignSelf: 'stretch',
        width: 330,
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
    hint: {
        marginBottom: 30,
        alignItems: 'center',
        opacity: .5,
    },
    hintText: {
        fontWeight: 'light',
        color: mediumGray,
    }
})

export default Quiz