import { Box, Switch } from 'native-base';
import React from 'react';
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native';
import { ESTILOS_COMUNS } from '../styles/estilosComuns';
import { connect } from 'react-redux';
import { toggleThemeMode } from '../store/actions/configs';
import { borderDebug } from '../util/functionsDebugs';
import IconFooter from '../components/IconFooter';

/**
 * Cabeçalho da barra de navegação.
 */
const FooterDrawer = props => {
    const isDark = props.darkMode
    return (
        <View style={estilos.container}>
            <View style={estilos.iconGroups}>
                <IconFooter
                    color='#edeff2'
                    name='github-alt'
                    size={ESTILOS_COMUNS.iconesTamanhos.grande}
                    colorBackground='#7e4291'
                />
                <IconFooter
                    color='#edeff2'
                    name='envelope'
                    size={ESTILOS_COMUNS.iconesTamanhos.grande}
                    colorBackground={ESTILOS_COMUNS.cores.azulSecundario}
                />
                <IconFooter
                    color='#edeff2'
                    name='share-alt'
                    size={ESTILOS_COMUNS.iconesTamanhos.grande}
                    colorBackground={ESTILOS_COMUNS.cores.larajan}
                />
                <IconFooter
                    color='#edeff2'
                    name='hand-holding-usd'
                    size={ESTILOS_COMUNS.iconesTamanhos.grande}
                    colorBackground={ESTILOS_COMUNS.cores.sucesso}

                />
            </View>
        </View >
    );
}

const estilos = StyleSheet.create({
    container: {
        height: Dimensions.get('screen').height * 1 / 8,
        borderTopColor: 'gray',
        borderTopWidth: 2,
        flex: 1,
        justifyContent: 'flex-end',
    },
    iconGroups: {
        flexDirection: 'row',
        justifyContent: 'space-around'

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

export default connect(mapStateToProps, mapDispatchToProps)(FooterDrawer);