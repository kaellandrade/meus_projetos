import { Box, Switch } from 'native-base';
import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { ESTILOS_COMUNS } from '../styles/estilosComuns';
import Icon from 'react-native-vector-icons/FontAwesome5'
import menu from '../../assets/img/menu.png'
import { BackgroundImage } from 'react-native-elements/dist/config';
import { connect } from 'react-redux';
import { toggleThemeMode } from '../store/actions/configs';

const HeaderDrawer = props => {

    const isDark = props.darkMode
    return (
        <BackgroundImage style={estilos.container} source={menu}
            blurRadius={8} resizeMode='cover'
        >
            <View style={estilos.logo}>
                <Text style={estilos.textLogo}>LOGO</Text>
            </View>
            <Box style={estilos.painelControl}>
                <Icon color={isDark ? 'gray' : 'black'} name='sun' size={ESTILOS_COMUNS.iconesTamanhos.medio} />
                <Switch
                    onThumbColor={ESTILOS_COMUNS.cores.azulSecundario}
                    onTrackColor={ESTILOS_COMUNS.cores.sucesso}
                    size='lg'
                    isChecked={props.darkMode}
                    onToggle={props.toggleThemeMode}
                />
                <Icon color={isDark ? 'black' : 'gray'} name='moon' size={ESTILOS_COMUNS.iconesTamanhos.medio} />
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
        alignItems: 'center',
    },
    logo: {
        borderColor: ESTILOS_COMUNS.cores.principal,
        flex: 1,
        height: '50%',
        flexDirection: 'row',
        alignItems: 'center',

    },
    textLogo: {
        fontSize: 30,
        fontFamily: ESTILOS_COMUNS.fontPrincipal.light,
        textAlign: 'center',
        color: ESTILOS_COMUNS.cores.principal,
    }
})

const mapStateToProps = ({ config }) => {
    return {
        darkMode: config.darkMode
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleThemeMode: _ => dispatch(toggleThemeMode())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderDrawer);