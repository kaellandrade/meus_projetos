import { Box, Switch } from 'native-base';
import React from 'react';
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native';
import { ESTILOS_COMUNS } from '../styles/estilosComuns';
import { connect } from 'react-redux';
import { toggleThemeMode } from '../store/actions/configs';
import { borderDebug } from '../util/functionsDebugs';
import IconFooter from '../components/IconFooter';
import Icon from 'react-native-vector-icons/FontAwesome5';
/**
 * Cabeçalho da barra de navegação.
 */
const FooterDrawer = props => {
    const isDark = props.darkMode
    return (
        <View style={estilos.container}>
            <View style={estilos.contentInfo}>
                <View style={estilos.titleContainer}>
                    < Icon
                        name='heart'
                        size={ESTILOS_COMUNS.iconesTamanhos.medio}
                        style={estilos.likeTitle}
                    />
                    <Text style={estilos.titleFont}>
                        Gostou do aplicativo?
                    </Text>
                </View>
                <Text style={estilos.contentText}>
                    Contribua com o projeto, seja apoiando no <Text style={{ fontWeight: 'bold' }}>Github</Text>,
                    <Text style={{ fontWeight: 'bold' }}> Play Store</Text>,
                    <Text style={{ fontWeight: 'bold' }}> compartilhando</Text> ou até mesmo com uma simbólica
                    <Text style={{ fontWeight: 'bold' }}> doação</Text>. Obrigado!
                </Text>
            </View>
            <View style={estilos.iconGroups}>
                <IconFooter
                    color='#edeff2'
                    name='github-alt'
                    size={ESTILOS_COMUNS.iconesTamanhos.medio}
                    colorBackground='#7e4291'
                />
                <IconFooter
                    color='#edeff2'
                    name='star'
                    size={ESTILOS_COMUNS.iconesTamanhos.medio}
                    colorBackground={ESTILOS_COMUNS.cores.azulSecundario}
                />
                <IconFooter
                    color='#edeff2'
                    name='share-alt'
                    size={ESTILOS_COMUNS.iconesTamanhos.medio}
                    colorBackground={ESTILOS_COMUNS.cores.larajan}
                />
                <IconFooter
                    color='#edeff2'
                    name='hand-holding-usd'
                    size={ESTILOS_COMUNS.iconesTamanhos.medio}
                    colorBackground={ESTILOS_COMUNS.cores.sucesso}

                />
            </View>
        </View >
    );
}

const estilos = StyleSheet.create({
    container: {
        borderTopColor: ESTILOS_COMUNS.cores.azulPrimario,
        borderTopWidth: 5,
        flex: 1,
        justifyContent: 'flex-end',
    },
    iconGroups: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopColor: ESTILOS_COMUNS.cores.azulPrimario,
        borderTopWidth: 5,
        paddingTop: 8,
    },
    titleFont: {
        fontSize: 20,
        textAlign: 'center',
        color:'#fff',
        fontFamily: ESTILOS_COMUNS.fontPrincipal.medium,
    },
    contentText: {
        padding: 10,
        fontSize: 15.5,
        fontFamily: ESTILOS_COMUNS.fontPrincipal.light,
        textAlign: 'center',
        margin: 5
    },
    likeTitle: {
        color: '#fff',
        marginRight: 2
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        width: '80%',
        alignSelf: 'center',
    },
    contentInfo:{
        backgroundColor:ESTILOS_COMUNS.cores.azulSecundario
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