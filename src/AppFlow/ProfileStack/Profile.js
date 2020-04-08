import React, { Component } from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserAstronaut, faAddressBook, faTools, faHistory } from '@fortawesome/free-solid-svg-icons'

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
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.topBar}>
                    </View>
                    <View style={{ marginVertical: 10, flexDirection: 'row', width: '100%', justifyContent: "space-evenly" }}>
                        <View style={{ ...styles.topBar, height: null, borderTopWidth: 0, width: null, borderRadius: 50, padding: 20, }}>
                            <FontAwesomeIcon
                                icon={faAddressBook}
                                size={40}
                                style={{ color: '#4DC6AE' }}
                            />
                        </View>
                        <View style={{ ...styles.topBar, height: null, borderTopWidth: 0, width: null, borderRadius: 50, padding: 20, }}>
                            <FontAwesomeIcon
                                icon={faTools}
                                size={40}
                                style={{ color: '#4DC6AE' }}
                            />
                        </View>
                    </View>
                    <View style={styles.label}>
                        <FontAwesomeIcon
                            icon={faHistory}
                            size={25}
                            style={{ color: '#4DC6AE' }}
                        />
                        <Text style={styles.barText}>History</Text>
                    </View>
                    <View style={styles.topBar}>
                    </View>
                </ScrollView>
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
        height: 300,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: 20,
        padding: 10,
        borderRadius: 10,
        borderTopWidth: 20,
        borderTopColor: '#4DC6AE',
        backgroundColor: '#333333',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 5
    },
    barText: {
        color: '#EEEEEE',
        paddingLeft: 7,
        fontSize: 18,
    },
    label: {
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 25,
    },
})
