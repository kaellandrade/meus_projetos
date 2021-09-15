import { Center } from 'native-base';
import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image } from 'react-native';
import { ESTILOS_COMUNS } from '../styles/estilosComuns';
import { borderDebug } from '../util/functionsDebugs';
import boxGifit from '../../assets/img/empty.png'

const TutorialAdd = props => {
    return (
        <View style={estilos.container}>
            <ImageBackground resizeMode='contain' style={estilos.backGround} source={boxGifit}>
                <Text style={estilos.textoDica}>
                    Adicione seus amigos...
                </Text>
            </ImageBackground>
        </View >
    );
}
const estilos = StyleSheet.create({
    container: {
        flex: 1,
    },
    textoDica: {
        fontFamily: ESTILOS_COMUNS.fontPrincipal.light,
        fontSize: 30,
        textAlign: 'center',
        backgroundColor:ESTILOS_COMUNS.cores.principal,
        paddingTop:30,
        paddingBottom:30,
        opacity:0.6,
        color:ESTILOS_COMUNS.cores.secundaria

    },
    boxDesenho: {
        marginTop: 50

    },
    backGround: {
        flex: 1,
        justifyContent: 'center',
        opacity: 0.7,

    }
})
export default TutorialAdd;