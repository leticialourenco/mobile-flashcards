import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { lightGray, mediumGray } from '../utils/colors'

class Quiz extends Component {
    render() {
        const { questions } = this.props.navigation.state.params;

        return (
            <ScrollView style={styles.container}>

                <Text style={{ textAlign: 'center' }}>
                    Question 1 of { questions.length }
                </Text>

                { questions.map((item) =>
                    <View>
                        <Text style={styles.question}>
                            { item.question }
                        </Text>

                        <TouchableOpacity
                            style={styles.flipButton}
                        >
                            <Text style={styles.flipText}>
                                show answer
                            </Text>
                        </TouchableOpacity>


                        <TouchableOpacity
                            style={styles.button}
                        >
                            <Text>Correct</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.button, {marginBottom: 100}]}
                        >
                            <Text>Incorrect</Text>
                        </TouchableOpacity>
                    </View>
                )}
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
        paddingTop: 50,
        paddingLeft: 20,
        paddingRight: 20,
    },
    question: {
        marginTop: 50,
        marginBottom: 25,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',

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
    flipButton: {
        marginTop: 25,
        marginBottom: 50,
        alignItems: 'center',
    },
    flipText: {
        fontWeight: 'bold',
    }
})

export default Quiz