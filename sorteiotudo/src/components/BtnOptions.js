import React, { useRef, useState } from 'react';
import {StyleSheet, Dimensions, Vibration, TouchableNativeFeedback } from 'react-native';
import { ESTILOS_COMUNS } from '../styles/estilosComuns';
import { DELAY_SORTED, UM_SEGUNDO_MS } from '../util/constantes';
import {
    useToast, Box,
    useDisclose,
    Stagger,
    AlertDialog,
    Button,

} from 'native-base';
import { connect } from 'react-redux'
import { deleteAllFriends, sortear, toggle_sortear } from '../store/actions/amigoSecreto';
import MyIconButton from './IconButton';
import Dialog from './Dialog';
import If from './If';
const BtnOptions = props => {
    const { isOpen, onToggle } = useDisclose()
    const toast = useToast();
    const SORTEADOS = props.sorteados.length;
    const CADASTRADOS = props.cadastrados.length;


    const [AlertisOpen, setIsOpen] = useState(false);
    const onClose = _ => setIsOpen(false);
    const onOpen = _ => setIsOpen(true);
    const cancelRef = useRef();

    const sortearDelay = _ => {
        props.toggle_sortear()
        props.sortear()
        setTimeout(_ => {
            props.toggle_sortear()
        }, DELAY_SORTED)
    }

    return (
        <Box style={[estilos.sorteio]}>
            <Dialog cancelRef={cancelRef} AlertisOpen={AlertisOpen} onClose={onClose} deleteAllFriends={props.deleteAllFriends} />
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
                    <If condition={props.sorteados.length == props.cadastrados.length}>
                        <MyIconButton opacity={0.7} Onpress={_ => {console.warn('Disparar E-mails')}} name='send' style={estilos.btnEmail} color='white' size={ESTILOS_COMUNS.iconesTamanhos.grande} />
                    </If>

                    <MyIconButton opacity={0.7} Onpress={sortearDelay} name='random' style={estilos.btnShuffle} color='white' size={ESTILOS_COMUNS.iconesTamanhos.grande} />
                    <MyIconButton opacity={0.7} Onpress={onOpen} name='trash' style={estilos.btnTrash} color='white' size={ESTILOS_COMUNS.iconesTamanhos.grande} />

                </Stagger>
            </Box>

            <MyIconButton opacity={0.7} Onpress={onToggle} name='gift' style={estilos.btnOptions} color='white' size={ESTILOS_COMUNS.iconesTamanhos.grande} />

        </Box >
    );
}

const estilos = StyleSheet.create({
    sorteio: {
        position: 'absolute',
        left: Dimensions.get('window').width * 1 / 30,
        bottom: 10,

    },
    btnOptions: {
        width: 70,
        borderWidth: 1,
        height: 70,
        backgroundColor: ESTILOS_COMUNS.cores.larajan,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",

        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    btnEmail: {
        backgroundColor: ESTILOS_COMUNS.cores.azulPrimario,
        borderRadius: 100,
        width: 70,
        height: 70,
        borderWidth: 1,
        borderColor: ESTILOS_COMUNS.cores.principal,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        ...ESTILOS_COMUNS.sobraBtns


    },
    btnShuffle: {
        backgroundColor: ESTILOS_COMUNS.cores.amizade,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: ESTILOS_COMUNS.cores.principal,
        width: 60,
        height: 60,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        ...ESTILOS_COMUNS.sobraBtns

    },
    btnTrash: {
        backgroundColor: ESTILOS_COMUNS.cores.perigo,
        width: 50,
        height: 50,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: ESTILOS_COMUNS.cores.principal,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        ...ESTILOS_COMUNS.sobraBtns
    },

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
        sortear: mode => dispach(sortear(mode)),
        deleteAllFriends: _ => dispach(deleteAllFriends()),
        toggle_sortear: _ => dispach(toggle_sortear(_))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BtnOptions);