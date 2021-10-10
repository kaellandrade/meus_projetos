import React, { useEffect } from 'react';
import { Vibration, Dimensions, SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { FlatList, Box } from 'native-base';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome'
import BtnOptions from '../components/BtnOptions';

import { SorteioSpinner } from '../components/spinnerSorteio';
import IconBtn from '../components/IconButton'
import If from '../components/If';
import { ESTILOS_COMUNS } from '../styles/estilosComuns';
import { randomColor } from '../util/randomColor';
import Painel from '../components/painelSearch';
import ModalFrind from '../components/ModalFrinds';
import { VAZIO, NUMERO_MINIMO_AMIGOS, UM_SEGUNDO_MS } from '../util/constantes';
import { openModal } from '../store/actions/modal';
import TutorialAdd from '../components/TutorialAdd';

import { deleteStorageFriend, addFriend, getfrindStorage } from '../store/actions/amigoSecreto';

/**
 * Recebe um nome de amigo e retorna sua inicial caso seja um
 * nome válido, caso contário retorna '?'
 * Ex: 'Micael' -> M
 * Ex2: '...' -> ?
 */
const getFirstLetterAvatar = (name) => {
    const iniciaisRegx = /\b\w/gi;
    const [nome] = iniciaisRegx.test(name) ? name.match(iniciaisRegx) : '?'
    return nome;

}
/**
 * Função responsável por renderizar os amigos.
        borderColor: ESTILOS_COMUNS.cores.azulSecundario,
 * 
 */
const renderFriend = ({ item }, props) => {
    const isDark = props.darkMode
    return (
        <View style={[estilos.boxFrind, isDark ?
            { borderColor: '#ababab', backgroundColor: '#0000' } : { borderColor: ESTILOS_COMUNS.cores.principal }]}>
            <Box style={[estilos.avatar, { backgroundColor: randomColor() }, isDark ? { borderColor: '#fffa' } : { borderBottomColor: 'black' }]}>
                <Text style={{ fontSize: 25 }}>{getFirstLetterAvatar(item.name)}</Text>
            </Box>

            <View style={{ flex: 1 }}>
                <Text style={[estilos.nome, isDark ? { color: '#fffa' } : { color: 'black' }]}>{item.name}</Text>
                <Text style={[estilos.email, isDark ? { color: '#fff8' } : { color: 'black' }]}>{item.email}</Text>
            </View>

            <View style={estilos.btnGroups}>
                <IconBtn
                    color={isDark ? ESTILOS_COMUNS.cores.secundaria : ESTILOS_COMUNS.cores.principal}
                    Onpress={_ => props.openModal({ name: item.name, email: item.email, id: item.id })}
                    name='edit' size={ESTILOS_COMUNS.iconesTamanhos.grande}
                    color={isDark ? '#fffa' : '#444444'}
                />
                <IconBtn
                    color={ESTILOS_COMUNS.cores.perigo}
                    Onpress={_ => props.deleteFriend(item.id)} name='trash' size={ESTILOS_COMUNS.iconesTamanhos.grande}
                    color={isDark ? '#BD1616' : '#950101'}
                />
            </View>
        </View >
    )
}

const AmigoSecreto = (props) => {

    const amigosCadastrados = props.cadastrados
    const isDark = props.darkMode
    useEffect(_ => {
        props.getfrindStorage();
    }, [])


    return (
        props.telaSorteando ? <SorteioSpinner texto='Sorteando amigos' /> :

            <View style={
                [
                    estilos.container,
                    isDark ? { backgroundColor: '#171717' } : { backgroundColor: ESTILOS_COMUNS.cores.secundaria }

                ]
            }>
                <ModalFrind />
                <Painel totalFrinds={amigosCadastrados.length} />
                <SafeAreaView style={estilos.conteudo}>
                    {
                        amigosCadastrados.length === VAZIO ? <TutorialAdd /> : <FlatList
                            data={amigosCadastrados}
                            renderItem={item => renderFriend(item, props)}
                            keyExtractor={item => item.id}
                        />
                    }


                    <TouchableWithoutFeedback onPress={_ => {
                        Vibration.vibrate(UM_SEGUNDO_MS * 0.04)
                        props.openModal(false) // Abri Modal sem ser em modo de Edição
                    }}
                        style={
                            {
                                borderBottomColor: 'red',
                                borderWidth: 1,
                                borderRadius: '100%'
                            }
                        }
                    >
                        <View style={[estilos.butonAdd, isDark ? { borderColor: '#ffff' } : { borderColor: '#444444' }]}>
                            <Icon
                                color={ESTILOS_COMUNS.cores.secundaria} name='plus'
                                size={ESTILOS_COMUNS.iconesTamanhos.extraGrande}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                </SafeAreaView>
                <If condition={amigosCadastrados.length >= NUMERO_MINIMO_AMIGOS}>
                    <BtnOptions />
                </If>
            </View >
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
    },
    conteudo: {
        flex: 1,
    },
    avatar: {
        borderWidth: 1,
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxFrind: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
        borderWidth: 0.5,
        margin: 4,
        borderRadius: 10,
        padding: 10,
    },
    btnGroups: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    },
    nome: {
        fontFamily: ESTILOS_COMUNS.fontPrincipal.medium,
        fontSize: 20
    },
    email: {
        fontFamily: ESTILOS_COMUNS.fontPrincipal.light,
        fontSize: 15
    },
    butonAdd: {
        backgroundColor: ESTILOS_COMUNS.cores.sucesso,
        width: 80,
        height: 80,
        borderRadius: 40,
        position: 'absolute',
        bottom: 10,
        right: Dimensions.get('window').width * 1 / 2 - 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        shadowColor: "#000",

        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    }

})

const mapStateToProps = ({ friends, config }) => {
    return {
        cadastrados: friends.amigosCadastrados,
        telaSorteando: friends.telaSorteando,
        darkMode: config.darkMode

    }
}

const mapDispatchToProps = dispatch => {
    return {
        openModal: mode => dispatch(openModal(mode)),
        deleteFriend: id => dispatch(deleteStorageFriend(id)),
        addFriend: frind => dispatch(addFriend(frind)),
        getfrindStorage: _ => dispatch(getfrindStorage())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AmigoSecreto);
