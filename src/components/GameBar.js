import React from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    Text,
    View,
    Image,
} from 'react-native'
import { SafeAreaView } from 'react-navigation'

const GameBar = ({ height }) => {
    return (
        <View style={{ ...styles.barStyle, height: height }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ width: 50, height: 50, borderRadius: 50, backgroundColor: '#121212' }}>
                </View>
                <Text style={{ fontSize: 18, fontWeight: '600', paddingLeft: 10, color: '#eeeeee' }}>@username</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                <Text style={{ fontSize: 20, color: '#C485BF', fontWeight: "bold" }}>Lvl.</Text>
                <Text style={styles.barText}>1</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                <Text style={{ fontSize: 20, color: '#569BD5', fontWeight: "bold" }}>ELO</Text>
                <Text style={styles.barText}>1200</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    barStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        margin: 5,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#444444',
        height: 70,
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
})

export default GameBar