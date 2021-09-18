import { Box, Switch } from 'native-base';
import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { ESTILOS_COMUNS } from '../styles/estilosComuns';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { borderDebug } from '../util/functionsDebugs';
import menu from '../../assets/img/menu.png'
import { BackgroundImage } from 'react-native-elements/dist/config';

const HeaderDrawer = props => {
    return (
        <BackgroundImage style={estilos.container} source={menu}
            blurRadius={0} resizeMode='cover'
        >
            <View style={{...borderDebug(1, 'red')}}>
                <Text style={{ fontSize: 40 }}>LOGO</Text>
            </View>
            <Box style={estilos.painelControl}>
                <Icon style={estilos.iconsHead} name='sun' size={ESTILOS_COMUNS.iconesTamanhos.medio} />
                <Switch onThumbColor={ESTILOS_COMUNS.cores.azulSecundario} onTrackColor={ESTILOS_COMUNS.cores.sucesso} size='md' />
                <Icon style={estilos.iconsHead} name='moon' size={ESTILOS_COMUNS.iconesTamanhos.medio} />
            </Box>
        </BackgroundImage>
    );
}

const estilos = StyleSheet.create({
    container: {
        height: Dimensions.get('screen').height * 1 / 8,
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    painelControl: {
        flexDirection: 'row',
        height: 50,
        marginRight: 10,
        alignItems: 'center'
    },
    iconsHead: {
        color: 'gray',
    }
})
export default HeaderDrawer;