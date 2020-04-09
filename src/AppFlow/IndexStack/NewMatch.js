import React from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Text,
    View,
    Switch,
    ScrollView
} from 'react-native'
import { SafeAreaView } from 'react-navigation'
import Collapsible from 'react-native-collapsible'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft, faBolt, faPlay, faRobot, faCodeBranch, faPeopleArrows, faLaptopMedical, faNetworkWired, faLock } from '@fortawesome/free-solid-svg-icons'
import { faPython, faJava } from '@fortawesome/free-brands-svg-icons'

export default class NewMatch extends React.Component {

    state = { gameMode: faPlay, activeSection: '', python: false, java: false, clang: false }

    render() {
        return (
            <SafeAreaView style={styles.container}>


                <View style={styles.headerStyle}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Index')} style={styles.backStyle}>
                        <FontAwesomeIcon
                            icon={faChevronLeft}
                            size={30}
                            style={{ color: '#4DC6AE' }}
                        />
                    </TouchableOpacity>
                    <FontAwesomeIcon
                        icon={faPlay}
                        size={30}
                        style={{ color: '#4DC6AE' }}
                    />
                    <Text style={styles.headerText}> </Text>
                </View>


                {/* Language Selector */}
                <View>
                    <View style={styles.languageSelect}>
                        <Switch
                            trackColor={{ false: "#1E1E1E", true: "#4DC6AE" }}
                            onValueChange={() => { this.setState({ python: !this.state.python }) }}
                            value={this.state.python}
                        />
                        <Switch
                            trackColor={{ false: "#1E1E1E", true: "#4DC6AE" }}
                            onValueChange={() => { this.setState({ java: !this.state.java }) }}
                            value={this.state.java}
                        />
                        <Switch
                            trackColor={{ false: "#1E1E1E", true: "#4DC6AE" }}
                            onValueChange={() => { this.setState({ clang: !this.state.clang }) }}
                            value={this.state.clang}
                        />
                    </View>

                    <View style={{ ...styles.languageSelect, marginTop: 0 }}>
                        <FontAwesomeIcon
                            icon={faPython}
                            size={50}
                            style={
                                this.state.python ?
                                    { color: '#4DC6AE' }
                                    :
                                    { color: '#CCCCCC' }
                            }
                        />
                        <FontAwesomeIcon
                            icon={faJava}
                            size={50}
                            style={
                                this.state.java ?
                                    { color: '#4DC6AE' }
                                    :
                                    { color: '#CCCCCC' }
                            }
                        />
                        <Text style=
                            {
                                this.state.clang ?
                                    { fontSize: 70, fontWeight: "bold", color: '#4DC6AE' }
                                    :
                                    { fontSize: 70, fontWeight: "bold", color: '#CCCCCC' }
                            }>
                            C
                                </Text>
                    </View>
                </View>


                {/* Game Modes */}
                <ScrollView showsVerticalScrollIndicator={false} style={{ width: '100%', marginBottom: 100 }}>

                    {/* Coderunner */}
                    <TouchableOpacity style={styles.topBar} onPress={() => this.setState({ gameMode: faRobot, activeSection: 'coderunner' })}>
                        <FontAwesomeIcon
                            icon={faRobot}
                            size={40}
                            style={{ color: '#1E1E1E' }}
                        />
                        <Text style={styles.barText}>
                            /coderunner
                    </Text>
                    </TouchableOpacity>
                    <Collapsible style={styles.collapsibleStyle} collapsed={this.state.activeSection != 'coderunner'}>
                        <Text style={styles.label}>Who's a good computer?</Text>
                    </Collapsible>

                    {/* Codex */}
                    <TouchableOpacity style={styles.topBar} onPress={() => this.setState({ gameMode: faCodeBranch, activeSection: 'codex' })}>
                        <FontAwesomeIcon
                            icon={faCodeBranch}
                            size={40}
                            style={{ color: '#1E1E1E' }}
                        />
                        <Text style={styles.barText}>
                            /codex
                    </Text>
                    </TouchableOpacity>
                    <Collapsible style={styles.collapsibleStyle} collapsed={this.state.activeSection != 'codex'}>
                        <Text style={styles.label}>Test your conceptual knowledge.</Text>
                    </Collapsible>

                    {/* Network */}
                    <TouchableWithoutFeedback onPress={() => this.setState({ gameMode: faLock, activeSection: 'network' })}>
                        <View style={{ ...styles.topBar, backgroundColor: '#C485BF', opacity: 0.5 }}>
                            <FontAwesomeIcon
                                icon={faPeopleArrows}
                                size={40}
                                style={{ color: '#1E1E1E' }}
                            />
                            <FontAwesomeIcon
                                icon={faLock}
                                size={40}
                                style={styles.lockStyle}
                            />
                            <Text style={styles.barText}>
                                /network
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <Collapsible style={styles.collapsibleStyle} collapsed={this.state.activeSection != 'network'}>
                        <Text style={styles.label}>Interview Prep [1400+ ELO]</Text>
                    </Collapsible>

                    {/* Codedoctor */}
                    <TouchableWithoutFeedback onPress={() => this.setState({ gameMode: faLock, activeSection: 'codedoctor' })}>
                        <View style={{ ...styles.topBar, backgroundColor: '#C485BF', opacity: 0.5 }}>
                            <FontAwesomeIcon
                                icon={faLaptopMedical}
                                size={40}
                                style={{ color: '#1E1E1E' }}
                            />
                            <FontAwesomeIcon
                                icon={faLock}
                                size={40}
                                style={styles.lockStyle}
                            />
                            <Text style={styles.barText}>
                                /codedoctor
                    </Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <Collapsible style={styles.collapsibleStyle} collapsed={this.state.activeSection != 'codedoctor'}>
                        <Text style={styles.label}>Debugging gamemode [Lvl. 5+]</Text>
                    </Collapsible>

                    {/* Codexchange */}
                    <TouchableWithoutFeedback onPress={() => this.setState({ gameMode: faLock, activeSection: 'codexchange' })}>
                        <View style={{ ...styles.topBar, backgroundColor: '#B23951', opacity: 0.5 }}>
                            <FontAwesomeIcon
                                icon={faNetworkWired}
                                size={40}
                                style={{ color: '#1E1E1E' }}
                            />
                            <FontAwesomeIcon
                                icon={faLock}
                                size={40}
                                style={styles.lockStyle}
                            />
                            <Text style={styles.barText}>
                                /codexchange
                    </Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <Collapsible collapsed={this.state.activeSection != 'codexchange'}>
                        <View style={{ width: 330 }}>
                            <Text style={styles.label}>Pose and solve community-generated questions [Premium feature]</Text>
                        </View>
                    </Collapsible>
                </ScrollView>


                {/* Play Button */}
                {
                    this.state.gameMode == faPlay || this.state.gameMode == faLock ?
                        <View style={{ ...styles.topBar, justifyContent: 'center', position: 'absolute', bottom: 20, opacity: 0.5 }}>
                            <FontAwesomeIcon
                                icon={this.state.gameMode}
                                size={40}
                                style={{ color: '#1E1E1E' }}
                            />
                        </View>
                        :
                        <TouchableOpacity style={{ ...styles.topBar, justifyContent: 'center', position: 'absolute', bottom: 20 }}>
                            <FontAwesomeIcon
                                icon={this.state.gameMode}
                                size={40}
                                style={{ color: '#1E1E1E' }}
                            />
                        </TouchableOpacity>
                }
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
    backStyle: {
        position: 'absolute',
        left: 10,
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginTop: 20,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#4DC6AE',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 5
    },
    languageSelect: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        marginTop: 20,
        padding: 10,
        paddingBottom: 0,
    },
    barInternal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    barText: {
        color: '#000',
        paddingLeft: 7,
        fontSize: 25,
        fontWeight: '300',
    },
    label: {
        paddingTop: 10,
        color: '#CCCCCC',
        fontSize: 20,
    },
    collapsibleStyle: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    lockStyle: {
        color: '#000',
        position: "absolute",
        left: 110
    },
})
