import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import * as deckActions from '../actions'
import { lightGray, mediumGray } from '../utils/colors'

class NewQuestion extends Component {
    state = {
        question: '',
        answer: ''
    }

    submitNewQuestion = () => {
        const data = {
            title: this.props.navigation.state.params.title,
            question: this.state
        };
        this.props.actions.addQuestion(data);
        this.props.navigation.navigate('DeckSingle');
        this.setState({ question: '', answer: '' });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>
                    Question
                </Text>
                <TextInput
                    style={styles.input}
                    value={ this.state.question }
                    onChangeText={ (question) => this.setState({ question }) }
                />

                <Text style={styles.label}>
                    Answer
                </Text>
                <TextInput
                    style={styles.input}
                    value={ this.state.answer }
                    onChangeText={ (answer) => this.setState({ answer }) }
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={ () => { this.submitNewQuestion() }}
                >
                    <Text>Create Question</Text>
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


const mapStateToProps = (state) => {
    return {}
}

function mapDispatchToProps (dispatch) {
    return {
        actions: {
            addQuestion: ({ title, question }) => dispatch(deckActions.addQuestion({ title, question }))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion)