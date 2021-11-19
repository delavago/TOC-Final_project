import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../res/colors';

//inages
// import Pharmacist from '../../src/images'

let OptionsScreen = (props: {toAssistanceScreen: Function, toItemSelection: Function}) => {
    return (
        <View style={styles.page_container}>
            <View style={styles.text_container}>
                <Text style={styles.header_text}>Select an option</Text>
            </View>
            <View style={styles.options_button_container}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: 10 }}>
                        <OptionCard
                            onPress={props.toAssistanceScreen}
                            imageComponent={<Image
                                style={{ width: 180, height: 180 }}
                                source={require("../images/undraw_medicine.png")}
                            />}
                        />
                        <Text style={styles.option_card_label}>Presription drugs</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: 10 }}>
                        <OptionCard
                            onPress={props.toItemSelection}
                            imageComponent={<Image
                                style={{ width: 180, height: 180 }}
                                source={require("../images/undraw_online_groceries.png")}
                            />}
                        />
                        <Text style={styles.option_card_label}>Over the counter drugs</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

let OptionCard = (props: { imageComponent: any, onPress: Function }) => {
    return (
        <TouchableOpacity onPress={()=>props.onPress()}>
            <View style={styles.option_card_container}>
                {props.imageComponent}
            </View>
        </TouchableOpacity>
    )
}

let styles = StyleSheet.create({
    page_container: {
        backgroundColor: COLORS.green1,
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    text_container: {
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
    options_button_container: {
        flex: 3,
        padding: 20
    },

    option_card_container: {
        height: 200,
        width: 200,
        backgroundColor: '#fff',
        borderRadius: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    option_card_label: {
        fontSize: 18,
        fontWeight: '500',
        color: '#fff'
    }
})

export default OptionsScreen;