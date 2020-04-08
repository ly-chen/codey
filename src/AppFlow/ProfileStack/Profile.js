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
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'

export default class Profile extends React.Component {

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.headerStyle}>
                    <FontAwesomeIcon
                        icon={faUserAstronaut}
                        size={30}
                        style={{ color: '#4DC6AE' }}
                    />
                    <Text style={styles.headerText}> </Text>
                </View>
                <View style={styles.topBar}>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#1E1E1E'
    },
    headerStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '110%',
        borderBottomWidth: 0.5,
        borderBottomColor: '#4DC6AE'
    },
    headerText: {
        paddingBottom: 10,
        fontSize: 20,
        color: '#4DC6AE'
    },
    topBar: {
        height: '40%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: 20,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#333333',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 5
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
