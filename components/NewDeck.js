import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { mediumGray, lightGray } from '../utils/colors'

class NewDeck extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>
                    Title
                </Text>

                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({text})}
                    value={''}
                />

                <TouchableOpacity style={styles.button}>
                    <Text>Create</Text>
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

export default NewDeck