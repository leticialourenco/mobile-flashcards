import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Quiz extends Component {
    render() {
        const questions  = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <Text>Quiz</Text>
                { Object.keys(questions).map((key) =>
                    <Text> > { questions[key].question }</Text>
                )}
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

export default Quiz