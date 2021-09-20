import React from "react"
import {
    Spinner,
    HStack,
    Heading,
    Center,
} from "native-base"
import { ESTILOS_COMUNS } from "../styles/estilosComuns"
import { BackgroundImage } from "react-native-elements/dist/config"
import { StyleSheet } from "react-native"
import sorted from '../../assets/img/sorted.png'


export const SorteioSpinner = props => {
    return (
        <BackgroundImage resizeMode='contain' style={estilos.backGround} source={sorted}>
            <HStack space={2}>
                <Heading color={props.cor || ESTILOS_COMUNS.cores.amizade}>{props.texto}</Heading>
                <Spinner color={props.cor || ESTILOS_COMUNS.cores.amizade} accessibilityLabel="Loading posts" />
            </HStack>
        </BackgroundImage>
    )
}

const estilos = StyleSheet.create({
    backGround: {
        flex: 1,
        justifyContent: 'flex-end',
        opacity: 0.7,
        alignItems:'center'
    }
})