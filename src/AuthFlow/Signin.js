// Login.js
import React from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity, KeyboardAvoidingView, Keyboard } from 'react-native'
import auth from '@react-native-firebase/auth'

export default class Signin extends React.Component {
    state = { email: '', password: '', errorMessage: null }
    handleLogin = () => {
        const { email, password } = this.state
        Keyboard.dismiss()
        auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate('Home'))
            .catch(error => this.setState({ errorMessage: error.message }))
    }
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior='padding'>
                {this.state.errorMessage &&
                    <Text style={{ color: 'red' }}>
                        {this.state.errorMessage}
                    </Text>}
                <TextInput
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="Email"
                    placeholderTextColor="#EEEEEE"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                />
                <TextInput
                    secureTextEntry
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="Password"
                    placeholderTextColor="#EEEEEE"
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                />
                <TouchableOpacity style={styles.button} onPress={this.handleLogin} >
                    <Text style={{ color: "#121212" }}>Log In</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView >
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212'
    },
    textInput: {
        height: 40,
        width: '90%',
        borderColor: '#EEEEEE',
        color: 'white',
        borderBottomWidth: 1,
        marginTop: 50
    },
    button: {
        alignItems: 'center',
        width: '90%',
        padding: 20,
        marginTop: 60,
        backgroundColor: '#EEEEEE',
        borderColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 50
    }
})