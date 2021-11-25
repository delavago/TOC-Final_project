import React from "react";
import LottieView from 'lottie-react-native';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../res/colors';

let ThankYouScreen = (props: {onPressDone: Function}) => {
    return (
        <View style={styles.page_container}>
            <View style={styles.header_container}>
                <Text style={styles.header_text}>Thank You for Shopping!</Text>
            </View>
            <View style={styles.body_container}>
                <View style={{flex: 3}}>
                    <LottieView source={require('../lottie/done.json')} autoPlay loop
                        autoSize={false}
                    />
                </View>
                <View style={{flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity style={styles.button} onPress={()=>props.onPressDone()}>
                        <Text style={styles.button_Text}>Done</Text>
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
    body_container: {
        flex: 3,
        padding: 20,
        display: 'flex',
        flexDirection: 'column'
    },

    button: {
        height: 50,
        width: 200,
        backgroundColor: "#fff",
        borderRadius: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    button_Text: {
        fontSize: 18,
        fontWeight: '500',
        color: COLORS.green1
    },
})

export default ThankYouScreen;