import React, { useEffect, useRef, useState } from "react"
import { Button, Modal, Input, useToast } from "native-base"
import { connect } from "react-redux"
import { closeModal } from "../store/actions/modal"
import {updateFriend, addStorageFriend } from '../store/actions/amigoSecreto'
import { VAZIO } from '../util/constantes'
import { Dimensions } from "react-native"
const ModalFrind = props => {
    const inputName = useRef(null)
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


    const toast = useToast();
    const updateOrAdd = async _ => {
        if (props.id !== undefined) {
            props.updateFriend({ name, email, id: props.id })
            props.closeModal()
        } else { // Modo ADD
            try { 
                props.addFriend({name, email})
            } catch (error) {
                console.log(error)
            }
            setName('')
            setEmail('')
            inputName.current.focus();
            toast.show(
                {
                    title: 'Amigo adicionado!',
                    placement: 'top',
                    status: 'success',
                    description: 'Amigo adicionado! 😄',
                    width: Dimensions.get('window').width
                }
            )
        }
    }
    return (
        <Modal
            isOpen={props.showModal}
            onClose={props.closeModal}
        >
            <Modal.Content>
                <Modal.CloseButton />
                <Modal.Header>Insira novos amigos!</Modal.Header>
                <Modal.Body>
                    Ah, lembre-se de colocar um email válido :)!
                    <Input
                        mt={4}
                        placeholder="Nome do amigo..."
                        value={name}
                        onChangeText={name => setName(name)}
                        autoFocus
                        ref={inputName}

                    />
                    <Input
                        mt={4}
                        placeholder="E-mail do amigo"
                        value={email}
                        onChangeText={email => setEmail(email)}

                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button.Group >
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

const mapStateToProps = ({ modal }) => {
    return {
        showModal: modal.showModal,
        updateMode: modal.updateMode,
        name: modal.updateMode.name,
        email: modal.updateMode.email,
        id: modal.updateMode.id
    }
}
const mapDispatchToProps = dispach => {
    return {
        closeModal: _ => dispach(closeModal()),
        addFriend: ({name, email}) => dispach(addStorageFriend({name,email})),
        updateFriend: ({name, email, id}) => dispach(updateFriend(name, email, id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalFrind);