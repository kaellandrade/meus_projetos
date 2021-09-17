import { Box, Switch } from 'native-base';
import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { width } from 'styled-system';
import { ESTILOS_COMUNS } from '../styles/estilosComuns';
import { borderDebug } from '../util/functionsDebugs';
import Icon from 'react-native-vector-icons/FontAwesome5'


const HeaderDrawer = props => {
    return (
        <Box style={estilos.container}>
            <Text style={{ fontSize: 40 }}>LOGO</Text>
            <Box style={estilos.painelControl}>
                <Icon name='sun' size={ESTILOS_COMUNS.iconesTamanhos.grande} />
                <Switch size='lg'/>
                <Icon name='moon' size={ESTILOS_COMUNS.iconesTamanhos.grande} />
            </Box>
        </Box>
    );
}

const estilos = StyleSheet.create({
    container: {
        ...borderDebug(1, 'red'),
        height: Dimensions.get('screen').height * 1 / 8,
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    painelControl: {
        ...borderDebug(1, 'blue'),
        flexDirection: 'row',
        alignItems: 'center'

    }
})
export default HeaderDrawer;