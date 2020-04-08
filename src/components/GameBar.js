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

const GameBar = () => {
    return (
        <View style={styles.barStyle}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ width: 50, height: 50, borderRadius: 50, backgroundColor: '#121212' }}>
                </View>
                <Text style={{ fontSize: 20, paddingLeft: 10, }}>username</Text>
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
        backgroundColor: '#CCCCCC',
        height: 70,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 5
    }
})

export default GameBar