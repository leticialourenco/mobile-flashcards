import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class DeckSingle extends Component {
    render() {
        const { title, questions } = this.props.navigation.state.params;

        return (
            <View style={styles.container}>
                <Text>{ title } deck</Text>
                <Text>
                    { questions.length }
                    { questions.length > 1 ? ' questions' : ' question' }
                </Text>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('NewQuestion', { ...this.props.navigation.params })}
                >
                    <Text>Add a Question</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Quiz', { ...questions })}
                >
                    <Text>Start Quiz</Text>
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
        justifyContent: 'center',
    },
})

export default DeckSingle