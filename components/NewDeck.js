import React, { Component } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'

class NewDeck extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Enter a title for your deck</Text>
                <TextInput
                    style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({text})}
                    value={'bla'}
                />
                <Button
                    title="Create"
                />
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

export default NewDeck