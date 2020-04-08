import React, { Component } from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    Text,
    View,
    Image,
} from 'react-native'
import { SafeAreaView } from 'react-navigation'
import auth from '@react-native-firebase/auth'

export default class Welcome extends React.Component {

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 175, color: '#4DC6AE' }}>{'</>'}</Text>
                    <Text style={{ color: '#4DC6AE', fontSize: 75, paddingBottom: 30 }}>codey</Text>
                </View>
                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={() => { this.props.navigation.navigate('Signin') }}
                >
                    <Text style={styles.loginText}> log in </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { this.props.navigation.navigate('Signin') }}
                >
                    <Text style={styles.text}> sign up </Text>
                </TouchableOpacity>
            </SafeAreaView >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#1E1E1E'
    },
    image: {
        alignSelf: 'center',
        width: 200,
        height: 200,
    },
    loginText: {
        color: '#121212',
        fontSize: 20,
    },
    text: {
        color: '#4DC6AE',
        fontSize: 20,
    },
    loginButton: {
        alignItems: 'center',
        backgroundColor: '#4DC6AE',
        padding: 20,
        marginVertical: 20,
        borderRadius: 50
    },
    button: {
        alignItems: 'center',
        padding: 20,
        marginVertical: 20,
        borderColor: '#4DC6AE',
        borderWidth: 1,
        borderRadius: 50
    },
})
