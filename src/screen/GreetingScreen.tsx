import React from 'react';
import LottieView from 'lottie-react-native';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../res/colors';

let GreetingsScreen = (props: {onPressNext: Function}) => {
    return (
        <View style={styles.page_container}>
            <View style={styles.header_container}>
                <Text style={styles.header_text}>Welcome!</Text>
                <Text style={styles.sub_heading_text}>Proceed the next button below to proceed</Text>
            </View>
            <View style={styles.button_container}>
                <LottieView source={require('../lottie/hi-wink.json')} autoPlay loop />
                <TouchableOpacity
                    onPress={()=>props.onPressNext()}
                    style={styles.next_button_container}
                >
                    <View style={styles.next_button}>
                        <LottieView source={require('../lottie/next.json')} autoPlay loop
                            autoSize={false}
                        />
                    </View>
                    {/* <Text style={styles.next_text}>Next</Text> */}
                </TouchableOpacity>
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
        flex: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header_text: {
        fontSize: 30,
        fontWeight: '500',
        color: '#fff'
    },
    button_container: {
        flex: 3,
        padding: 20,
        position: 'relative'
    },
    next_button_container: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        marginBottom: 40,
        marginRight: 40,
        height: 50,
        width: 200,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    next_button: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 8
    },
    sub_heading_text: {
        fontSize: 18,
        fontWeight: '500',
        color: '#000'
    }
})

export default GreetingsScreen