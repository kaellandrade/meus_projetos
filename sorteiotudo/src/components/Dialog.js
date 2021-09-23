import React from 'react';

import {
    AlertDialog,
    Button
} from 'native-base';


const Dialog = props => {
   
    return (
        <AlertDialog
            leastDestructiveRef={props.cancelRef}
            isOpen={props.AlertisOpen}
            onClose={props.onClose}
            motionPreset={"fade"}

        >
            <AlertDialog.Content>
                <AlertDialog.Header fontSize="lg" fontWeight="bold">
                    Deletar amigos
                </AlertDialog.Header>
                <AlertDialog.Body>
                    Você realmente deseja deletar todos seus amigos cadastrados?
                </AlertDialog.Body>
                <AlertDialog.Footer>
                    <Button ref={props.cancelRef} onPress={props.onClose}>
                        Não
                    </Button>
                    <Button colorScheme="red" onPress={props.deleteAllFriends} ml={3}>
                        Sim
                    </Button>
                </AlertDialog.Footer>
            </AlertDialog.Content>
        </AlertDialog >
    );
}

export default Dialog;