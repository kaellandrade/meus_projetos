import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {  Box } from "native-base";
import { ESTILOS_COMUNS } from '../styles/estilosComuns'
const Header = props => {
    return (
        <Box style={estilos.box} >
            <View style={estilos.content}>
                <View style={estilos.contentTitle}>
                    <Text style={estilos.title}>{props.titulo}</Text>
                    <Icon onPress={_ => console.warn('Abrir menu!')}
                        style={estilos.btnMenu}
                        name='bars'
                        size={ESTILOS_COMUNS.iconesTamanhos.grande} />
                </View >
            </View>
        </Box >
    );
}

const estilos = StyleSheet.create({
    box: {
        flexDirection: 'row',
        borderWidth: 1,
        borderBottomColor: ESTILOS_COMUNS.cores.secundaria,
    },
    title: {
        fontSize: ESTILOS_COMUNS.fontSize.title,
        fontFamily: ESTILOS_COMUNS.fontPrincipal.light,
        textAlign: 'center',
    },
    content: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',

    },
    contentTitle: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingTop: 10,
        paddingBottom: 10,
    },
    btnMenu: {
        position: 'absolute',
        left: 10,
        padding: 5,
    }
});

export default Header;