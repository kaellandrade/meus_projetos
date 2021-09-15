import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { borderDebug } from '../util/functionsDebugs';

const IconButton = props => {
    return (
        <TouchableOpacity onPress={props.Onpress} style={{ marginLeft: 5, padding: 10 }}>
            <Icon color={props.color} name={props.name} size={props.size} />
        </TouchableOpacity>
    );
}

export default IconButton;