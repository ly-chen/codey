import React, { Component } from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    Text,
    View,
    Image,
} from 'react-native'
import GameBar from '../../components/GameBar'
import { SafeAreaView } from 'react-navigation'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChess, faUsers, faGlobe } from '@fortawesome/free-solid-svg-icons'

export default class Rankings extends React.Component {

    render() {
        return (
            <SafeAreaView style={styles.container}>

                <View style={styles.headerStyle}>
                    <FontAwesomeIcon
                        icon={faChess}
                        size={30}
                        style={{ color: '#4DC6AE' }}
                    />
                    <Text style={styles.headerText}> </Text>
                </View>


                {/* Friends Leaderboard */}
                <View style={{ ...styles.label, paddingTop: 20 }}>
                    <FontAwesomeIcon
                        icon={faUsers}
                        size={25}
                        style={{ color: '#4DC6AE' }}
                    />
                    <Text style={styles.barText}>Friends</Text>
                </View>
                <View style={styles.topBar}>
                    <GameBar height={'28%'} />
                    <GameBar height={'28%'} />
                    <GameBar height={'28%'} />
                </View>


                {/* Global Leaderboard */}
                <View style={styles.label}>
                    <FontAwesomeIcon
                        icon={faGlobe}
                        size={25}
                        style={{ color: '#4DC6AE' }}
                    />
                    <Text style={styles.barText}>Global</Text>
                </View>
                <View style={styles.topBar}>
                    <GameBar height={'28%'} />
                    <GameBar height={'28%'} />
                    <GameBar height={'28%'} />
                </View>

            </SafeAreaView >
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
        height: '35%',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 10,
        borderRadius: 10,
        borderTopWidth: 20,
        borderTopColor: '#4DC6AE',
        backgroundColor: '#333333',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 5
    },
    barText: {
        color: '#eeeeee',
        paddingLeft: 7,
        fontSize: 18,
    },
    label: {
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 15,
    },
})
