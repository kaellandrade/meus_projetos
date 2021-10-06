import React, { useEffect, useRef, useState } from "react";
import { Button, Modal, Input, useToast } from "native-base";
import { connect } from "react-redux";
import { closeModal } from "../store/actions/modal";
import {
    updateStorageFriend,
    addStorageFriend
} from '../store/actions/amigoSecreto';
import { VAZIO } from '../util/constantes';
import { Dimensions, Text, StyleSheet } from "react-native";
import { validateEmail } from '../validations/validateFuncs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import If from '../components/If';
/**
 * Modal de cadastro e atualização de Amigos.
 */

const ModalFrind = props => {
    const inputName = useRef(null)
    const inputEmail = useRef(null)
    const toast = useToast();
    const darkMode = props.darkMode;
    let [name, setName] = useState('')
    let [email, setEmail] = useState('')

    useEffect(_ => {
        if (props.updateMode) {
            setName(String(props.name))
            setEmail(String(props.email))
        } else {
            setName('')
            setEmail('')
        }

    }, [props.updateMode])



    const updateOrAdd = async _ => {
        if (props.id !== undefined) {
            props.updateFriend({ name, email, id: props.id })
            props.closeModal()
        } else { // Modo ADD
            if (validateEmail(email)) {
                props.addFriend({ name, email })
                setName('')
                setEmail('')
                toast.show({
                    title: `${name}, adicionado(a)!`,
                    placement: 'top',
                    status: "success",
                    width: Dimensions.get('window').width
                })
                inputName.current.focus();
            } else {
                toast.show({
                    title: 'Ops! E-mail inválido!',
                    placement: 'top',
                    status: "error",
                    width: Dimensions.get('window').width,
                    accessibilityLiveRegion: 'assertive'
                })
                inputEmail.current.focus()

            }
        }
    }
    return (
        <Modal
            isOpen={props.showModal}
            onClose={props.closeModal}
            size='lg'

        >
            <Modal.Content style={darkMode ? estilos.darkModeContent : estilos.whiteModeContent}>
                <Modal.CloseButton />
                <Modal.Header>
                    <Text style={[estilos.title, darkMode ? estilos.darkModeFont : estilos.whiteModeFont]}>
                        {props.name ? 'Atualize seu amigo!' : 'Insira um novo amigo!'}
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <If condition={!props.name}>
                        <Text style={darkMode ? estilos.darkModeFont : estilos.whiteModeFont}>
                            Ah, lembre-se de colocar um email válido! 😉
                        </Text>
                    </If>
                    <Input
                        style={darkMode ? {color:'white'} : estilos.whiteModeFont}
                        mt={4}
                        placeholder="Nome do amigo..."
                        value={name}
                        onChangeText={name => setName(name)}
                        autoFocus
                        ref={inputName}
                        InputLeftElement={

                            <Icon name='user' size={20} style={{ margin: 5 }} color='gray' />
                        }

                    />
                    <Input
                        style={darkMode ? {color:'white'} : estilos.whiteModeFont}
                        ref={inputEmail}
                        mt={4}
                        placeholder="E-mail do amigo"
                        value={email}
                        onChangeText={email => setEmail(email)}
                        keyboardType="email-address"
                        autoCapitalize='none'
                        InputLeftElement={
                            <Icon name='envelope' size={20} style={{ margin: 5 }} color='gray' />
                        }
                    />
                </Modal.Body>
                <Modal.Footer
                    style={darkMode ? estilos.darkModeFooter : estilos.whiteModeContent}
                >
                    <Button.Group>
                        <Button
                            onPress={_ => props.closeModal()}
                            colorScheme="secondary"
                        >
                            Fechar
                        </Button>
                        <Button
                            onPress={updateOrAdd}
                            isDisabled={name.length === VAZIO || email.length === VAZIO}
                        >
                            {props.name ? 'Atualizar' : 'Cadastrar'}
                        </Button>
                    </Button.Group>
                </Modal.Footer>
            </Modal.Content>
        </Modal>
    )
}

const estilos = StyleSheet.create({
    darkModeContent: {
        backgroundColor: "#222831"
    },
    darkModeFooter: {
        backgroundColor: '#132743'
    },
    darkModeFont: {
        color: '#fffa'
    },
    whiteModeFont: {
        color: 'black'
    },
    whiteModeContent: {
        backgroundColor: 'white'
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

const mapStateToProps = ({ modal, config }) => {
    return {
        showModal: modal.showModal,
        updateMode: modal.updateMode,
        name: modal.updateMode.name,
        email: modal.updateMode.email,
        id: modal.updateMode.id,
        darkMode: config.darkMode
    }
}
const mapDispatchToProps = dispach => {
    return {
        closeModal: _ => dispach(closeModal()),
        addFriend: ({ name, email }) => dispach(addStorageFriend({ name, email })),
        updateFriend: ({ name, email, id }) => dispach(updateStorageFriend({ name, email, id }))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalFrind);