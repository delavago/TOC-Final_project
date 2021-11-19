import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../res/colors';

let ToPharmacistScreen = (props: {backToGreetingsScreen: Function, backToOptionScreen: Function}) => {
    return (
        <View style={styles.page_container}>
            <View style={styles.header_container}>
                <Text style={styles.header_text}>Proceed to a Pharmacist</Text>
                <Text style={styles.header_sub_text}>For prescription drugs a pharmacist will assist you with your prescription</Text>
            </View>
            <View style={styles.body_container}>
                <View style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={styles.card_container}>
                        <Image
                            style={{ width: 180, height: 180 }}
                            source={require("../images/undraw_assistance.png")}
                        />
                    </View>
                </View>
                <View style={{
                    marginTop: 10,
                    display: "flex",
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <TouchableOpacity style={styles.button} onPress={()=>props.backToGreetingsScreen()}>
                        <Text style={styles.button_Text}>End Interaction</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button_2} onPress={()=>props.backToOptionScreen()}>
                        <Text style={styles.button_Text_2}>Go Back</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

let styles = StyleSheet.create({
    page_container: {
        backgroundColor: COLORS.green1,
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    header_container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header_text: {
        fontSize: 30,
        fontWeight: '500',
        color: '#fff'
    },
    header_sub_text: {
        fontSize: 18,
        fontWeight: '500',
        color: '#000'
    },
    body_container: {
        flex: 3,
        padding: 20,
        display: 'flex',
        flexDirection: 'column'
    },

    card_container: {
        height: 200,
        width: 200,
        backgroundColor: '#fff',
        borderRadius: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    button: {
        height: 50,
        width: 200,
        borderColor: "#fff",
        borderWidth: 2,
        borderRadius: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    button_Text: {
        fontSize: 18,
        fontWeight: '500',
        color: '#fff'
    },
    button_2: {
        height: 50,
        width: 200,
        backgroundColor: "#fff",
        borderRadius: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    },
    button_Text_2: {
        fontSize: 18,
        fontWeight: '500',
        color: COLORS.green1
    }
})

export default ToPharmacistScreen;