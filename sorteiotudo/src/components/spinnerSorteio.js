import React from "react"
import {
    Spinner,
    HStack,
    Heading,
    Center,
} from "native-base"
import { ESTILOS_COMUNS } from "../styles/estilosComuns"

export const SorteioSpinner = props => {
    return (
        <Center flex={1}>
            <HStack space={2}>
                <Heading color={props.cor || ESTILOS_COMUNS.cores.amizade}>{props.texto}</Heading>
                <Spinner color={props.cor || ESTILOS_COMUNS.cores.amizade} accessibilityLabel="Loading posts" />
            </HStack>
        </Center>
    )
}