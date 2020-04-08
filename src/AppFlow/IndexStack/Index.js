import React from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native'
import GameBar from '../../components/GameBar'
import { SafeAreaView } from 'react-navigation'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCode, faBolt, faPlay, faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons'

export default class Index extends React.Component {

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.headerStyle}>
                    <FontAwesomeIcon
                        icon={faCode}
                        size={30}
                        style={{ color: '#4DC6AE' }}
                    />
                    <Text style={styles.headerText}> </Text>
                </View>
                <View style={styles.topBar}>
                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, color: '#ffffff', fontWeight: "bold" }}>5</Text>
                        <FontAwesomeIcon
                            icon={faBolt}
                            size={20}
                            style={{ color: '#4DC6AE' }}
                        />
                        <Text style={styles.barText}>45:00</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, color: '#4DC6AE', fontWeight: "bold" }}>Lvl.</Text>
                        <Text style={styles.barText}>1</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, color: '#4DC6AE', fontWeight: "bold" }}>ELO</Text>
                        <Text style={styles.barText}>1200</Text>
                    </View>
                </View>
                <View style={{ ...styles.topBar, justifyContent: 'center', backgroundColor: '#4DC6AE', marginBottom: 10, }}>
                    <FontAwesomeIcon
                        icon={faPlay}
                        size={30}
                        style={{ color: '#1E1E1E' }}
                    />
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{ width: '100%' }}>
                    <View style={styles.label}>
                        <FontAwesomeIcon
                            icon={faPlayCircle}
                            size={25}
                            style={{ color: '#4DC6AE' }}
                        />
                        <Text style={styles.barText}>Your Move</Text>
                    </View>
                    <View style={{ ...styles.topBar, flexDirection: 'column', justifyContent: 'center', borderTopWidth: 20, borderTopColor: '#4DC6AE', marginTop: 10, }}>
                        <GameBar />
                        <GameBar />
                        <GameBar />
                    </View>
                    <View style={styles.label}>
                        <FontAwesomeIcon
                            icon={faPauseCircle}
                            size={25}
                            style={{ color: '#B23951' }}
                        />
                        <Text style={styles.barText}>Their Move</Text>
                    </View>
                    <View style={{ ...styles.topBar, flexDirection: 'column', justifyContent: 'center', borderTopWidth: 20, borderTopColor: '#B23951', marginTop: 10, marginBottom: 20 }}>
                        <GameBar />
                        <GameBar />
                        <GameBar />
                    </View>
                </ScrollView>
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
        flexDirection: 'row',
        justifyContent: 'space-evenly',
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
        paddingTop: 25,
    },
})
