import { Box, Switch } from 'native-base';
import React from 'react';
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native';
import { ESTILOS_COMUNS } from '../styles/estilosComuns';
import Icon from 'react-native-vector-icons/FontAwesome5'
import menu from '../../assets/img/menu.png'
import { BackgroundImage } from 'react-native-elements/dist/config';
import { connect } from 'react-redux';
import { toggleThemeMode } from '../store/actions/configs';
import Logo from '../../assets/img/icone.png'
import { borderDebug } from '../util/functionsDebugs'
const HeaderDrawer = props => {

    const isDark = props.darkMode
    return (
        <BackgroundImage style={estilos.container} source={menu}
            blurRadius={0} resizeMode='cover'
        >
            <View style={estilos.logo}>
                <View>
                    <Image style={estilos.imgLogo} source={Logo} />
                </View>
                <Text style={[estilos.textS]}> S</Text>
                <Text style={estilos.textLogo}>orteio</Text>
                <Text style={estilos.textS}>T</Text>
                <Text style={estilos.textLogo}>udo</Text>

            </View>
            <Box style={estilos.painelControl}>
                <Icon color={isDark ? 'gray' : 'black'} name='sun' size={ESTILOS_COMUNS.iconesTamanhos.medio} />
                <Switch
                    onThumbColor={ESTILOS_COMUNS.cores.sucesso}
                    onTrackColor={ESTILOS_COMUNS.cores.azulPrimario}
                    size='lg'
                    isChecked={props.darkMode}
                    onToggle={props.toggleThemeMode}
                />
                <Icon color={isDark ? 'black' : 'gray'} name='moon' size={ESTILOS_COMUNS.iconesTamanhos.medio} />
            </Box>
        </BackgroundImage >
    );
}

const estilos = StyleSheet.create({
    container: {
        height: Dimensions.get('screen').height * 1 / 8,
    },
    painelControl: {
        flexDirection: 'row',
        height: 50,
        marginRight: 10,
        alignItems: 'center',
        justifyContent:'flex-end',

    },
    logo: {
        borderColor: ESTILOS_COMUNS.cores.principal,
        flex: 1,
        flexDirection: 'row',
        alignItems:'center',
        height:50,

    },
    imgLogo: {
        width: 50,
        height: 50,
        marginLeft: 5
    },
    textLogo: {
        fontSize: 30,
        fontFamily:ESTILOS_COMUNS.fontPrincipal.light

    },
    textS:{
        fontSize: 40,
        fontFamily:ESTILOS_COMUNS.fontPrincipal.light,
        color:ESTILOS_COMUNS.cores.principal

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