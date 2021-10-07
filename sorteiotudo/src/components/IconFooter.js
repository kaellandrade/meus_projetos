import React from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ESTILOS_COMUNS } from '../styles/estilosComuns';
const IconFooter = props => {
    return (
        <TouchableWithoutFeedback onPress={_ => console.log('Ação!')}>
            <View style={[style.circle, props.colorBackground ? { backgroundColor: props.colorBackground } : null]}>
                <Icon color={props.color} name={props.name} size={props.size} />
            </View >
        </TouchableWithoutFeedback>
    );
}

const style = StyleSheet.create({
    circle: {
        backgroundColor: 'gray',
        width: 40,
        height: 40,
        alignContent: 'center',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#444444',
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    }

})

export default IconFooter;