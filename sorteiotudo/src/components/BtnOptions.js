import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, Vibration, Alert } from 'react-native';
import { ESTILOS_COMUNS } from '../styles/estilosComuns';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Fragment } from 'react';
import { UM_SEGUNDO_MS } from '../util/constantes';
import {
    useToast, Box,
    useDisclose,
    IconButton,
    Stagger,
} from 'native-base';
import { connect } from 'react-redux'
import { sortear } from '../store/actions/amigoSecreto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { borderDebug } from '../util/functionsDebugs';
//TODO: JUSTAR ESSE COMPONENTE
const BtnOptions = props => {
    const SORTEADOS = props.sorteados.length;
    const CADASTRADOS = props.cadastrados.length;
    const { isOpen, onToggle } = useDisclose()
    const toast = useToast();
    return (
        <Box style={[estilos.sorteio, { ...borderDebug(1, 'red') }]}>
            <Box alignItems="center">
                <Stagger

                    visible={isOpen}
                    initial={{
                        opacity: 0,
                        scale: 0,
                        translateY: 34
                    }}
                    animate={{
                        translateY: 0,
                        scale: 1,
                        opacity: 1,
                        transition: {
                            type: "spring",
                            mass: 0.8,
                            stagger: {
                                offset: 30,
                                reverse: true,
                            },
                        },
                    }}
                    exit={{
                        translateY: 34,
                        scale: 0.5,
                        opacity: 0,
                        transition: {
                            duration: 100,
                            stagger: {
                                offset: 30,
                                reverse: true,
                            },
                        },
                    }}
                >
                    <IconButton
                        disabled={true}
                        style={estilos.btnEmail}
                        mb={4}
                        variant="solid"
                        rounded="full"
                        icon={<MaterialCommunityIcons color={ESTILOS_COMUNS.cores.secundaria} size={50} name="email-send" />}
                    />
                    <IconButton
                        style={estilos.btnShuffle}
                        mb={4}
                        variant="solid"
                        rounded="full"
                        icon={<MaterialCommunityIcons color={ESTILOS_COMUNS.cores.secundaria} size={40} name="shuffle" />}
                    />
                    <IconButton
                        style={estilos.btnTrash}
                        mb={4}
                        variant="solid"
                        rounded="full"
                        icon={<MaterialCommunityIcons color={ESTILOS_COMUNS.cores.secundaria} size={24} name="trash-can" />}
                    />

                </Stagger>
            </Box>
            <IconButton
                style={estilos.btnOptions}
                variant="unstyled"
                rounded="full"
                size="lg"
                onPress={onToggle}
            >
            </IconButton>
        </Box >
    );
}

const estilos = StyleSheet.create({
    sorteio: {
        position: 'absolute',
        left: Dimensions.get('window').width * 1 / 30,
        bottom: 10,
        // width: 60,
        // height: 60,
        // backgroundColor: ESTILOS_COMUNS.cores.larajan,
        // justifyContent: 'center',
        // alignItems: 'center',
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.23,
        // shadowRadius: 2.62,

        // elevation: 4,
    },
    btnOptions: {
        width: 70,
        borderWidth: 1,
        height: 70,
        backgroundColor: ESTILOS_COMUNS.cores.larajan
    },
    btnTrash: {
        backgroundColor: ESTILOS_COMUNS.cores.perigo,
    },
    btnEmail: {
        backgroundColor: ESTILOS_COMUNS.cores.sucesso
    },
    btnShuffle: {
        backgroundColor: ESTILOS_COMUNS.cores.amizade
    }

})

const mapStateToProps = ({ friends }) => {
    return {
        sorteados: friends.sorteio,
        cadastrados: friends.amigosCadastrados
    }
}

const mapDispatchToProps = dispach => {
    return {
        openModal: mode => dispach(openModal(mode)),
        deleteFriend: id => dispach(deleteFriend(id)),
        addFriend: frind => dispach(addFriend(frind)),
        sortear: mode => dispach(sortear(mode))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BtnOptions);