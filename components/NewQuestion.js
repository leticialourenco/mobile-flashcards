import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

class NewQuestion extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Enter Question</Text>
                <TextInput
                    style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({text})}
                    value={'bla'}
                />

                <Text>Enter Answer</Text>
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

export default NewQuestion