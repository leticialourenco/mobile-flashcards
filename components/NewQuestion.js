import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { lightGray, mediumGray } from '../utils/colors'

class NewQuestion extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>
                    Question
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({text})}
                    value={''}
                />

                <Text style={styles.label}>
                    Answer
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({text})}
                    value={''}
                />

                <TouchableOpacity style={styles.button}>
                    <Text>Add to deck</Text>
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
        marginBottom: 50,
    },
    button: {
        alignSelf: 'stretch',
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

export default NewQuestion