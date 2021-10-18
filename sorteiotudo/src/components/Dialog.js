import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {AlertDialog, Button} from 'native-base';

const Dialog = props => {
  const isDark = props.dark;
  console.log(isDark);
  return (
    <AlertDialog
      leastDestructiveRef={props.cancelRef}
      isOpen={props.AlertisOpen}
      onClose={props.onClose}
      motionPreset={'fade'}>
      <AlertDialog.Content
        style={isDark ? estilos.darkModeContent : estilos.whiteModeContent}>
        <AlertDialog.Header fontSize="lg" fontWeight="bold">
          <Text style={isDark ? estilos.darkModeFont : estilos.whiteModeFont}>
            Deletar amigos
          </Text>
        </AlertDialog.Header>
        <AlertDialog.Body>
          <Text style={isDark ? estilos.darkModeFont : estilos.whiteModeFont}>
            Você realmente deseja deletar todos seus amigos cadastrados?
          </Text>
        </AlertDialog.Body>
        <AlertDialog.Footer
          style={isDark ? estilos.darkModeFooter : estilos.whiteModeContent}>
          <Button ref={props.cancelRef} onPress={props.onClose}>
            Não
          </Button>
          <Button colorScheme="red" onPress={props.deleteAllFriends} ml={3}>
            Sim
          </Button>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  );
};

const estilos = StyleSheet.create({
  darkModeContent: {
    backgroundColor: '#222831',
  },
  darkModeFooter: {
    backgroundColor: '#132743',
  },
  darkModeFont: {
    color: '#fffa',
  },
  whiteModeFont: {
    color: '#000',
  },
  whiteModeContent: {
    backgroundColor: '#FFF',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Dialog;
