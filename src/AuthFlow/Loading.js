// Loading.js
import auth from '@react-native-firebase/auth'
import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
export default class Loading extends React.Component {
    componentDidMount() {
        if (auth().currentUser) {
            this.props.navigation.navigate('/index')
        } else {
            this.props.navigation.navigate('Welcome')
        }
        /*auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? 'Main' : 'Welcome')
        })*/
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4DC6AE'
    }
})