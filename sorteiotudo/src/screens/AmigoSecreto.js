import { FlatList, Box } from 'native-base';
import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import IconBtn from '../components/IconButton'
import { ESTILOS_COMUNS } from '../styles/estilosComuns';
import { randomColor } from '../util/randomColor';
import { Header } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import Painel from '../components/painelSearch';
import BtnOptions from '../components/BtnOptions';
import ModalFrind from '../components/ModalFrinds';
import { openModal } from '../store/actions/modal';
import { deleteFriend, addFriend } from '../store/actions/amigoSecreto';
import TutorialAdd from '../components/TutorialAdd';
import { VAZIO, NUMERO_MINIMO_AMIGOS, UM_SEGUNDO_MS } from '../util/constantes';
import { Vibration } from 'react-native';
import { SorteioSpinner } from '../components/spinnerSorteio';


/**
 * Função responsável por renderizar os amigos.
 */
const renderFriend = ({ item }, props) => {
    const iniciaisRegx = /\b\w/gi;
    const [nome] = item.name.match(iniciaisRegx);
    return (
        <Box style={estilos.boxFrind} m={0.5} rounded={10} p={2} shadow={0.7}>
            <Box style={[estilos.avatar, { backgroundColor: randomColor() }]}>
                <Text style={{ fontSize: 25 }}>{nome}</Text>
            </Box>

            <View style={{ flex: 1 }}>
                <Text style={estilos.nome}>{item.name}</Text>
                <Text style={estilos.email}>{item.email}</Text>
            </View>

            <View style={estilos.btnGroups}>
                <IconBtn
                    color={ESTILOS_COMUNS.cores.principal}

                    Onpress={_ => props.openModal({ name: item.name, email: item.email, id: item.id })} name='edit' size={ESTILOS_COMUNS.iconesTamanhos.grande} />
                <IconBtn
                    color={ESTILOS_COMUNS.cores.perigo}
                    Onpress={_ => props.deleteFriend(item.id)} name='trash' size={ESTILOS_COMUNS.iconesTamanhos.grande} />
            </View>
        </Box>
    )
}

const AmigoSecreto = props => {
    const amigosCadastrados = props.cadastrados
    return (
        props.telaSorteando ? <SorteioSpinner texto='Sorteando amigos' /> :

            <View style={estilos.container}>
                <ModalFrind />
                <Header
                    backgroundColor={ESTILOS_COMUNS.cores.sucesso}
                    barStyle="default"
                    placement="center"
                    leftComponent={
                        { icon: 'menu', color: '#fff', onPress: _ => console.log('Abrir menu!') }
                    }
                    centerComponent={
                        {
                            text: 'Amigo Secreto',
                            style: {
                                color: '#fff',
                                fontFamily: ESTILOS_COMUNS.fontPrincipal.light,
                                fontSize: 20
                            }
                        }
                    }

                />
                <Painel totalFrinds={amigosCadastrados.length} />
                <SafeAreaView style={estilos.conteudo}>
                    {
                        amigosCadastrados.length === VAZIO ? <TutorialAdd /> : <FlatList
                            data={amigosCadastrados}
                            renderItem={item => renderFriend(item, props)}
                            keyExtractor={item => item.id}
                        />
                    }


                    <TouchableNativeFeedback onPress={_ => {
                        Vibration.vibrate(UM_SEGUNDO_MS * 0.04)
                        props.openModal(false)
                    }}>
                        <View style={estilos.butonAdd}>
                            <Icon color={ESTILOS_COMUNS.cores.secundaria} name='plus' size={ESTILOS_COMUNS.iconesTamanhos.grande} />
                        </View>
                    </TouchableNativeFeedback>
                </SafeAreaView>
                {
                    amigosCadastrados.length >= NUMERO_MINIMO_AMIGOS ? <BtnOptions /> : null
                }
            </View >
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
    },
    conteudo: {
        flex: 1,
        backgroundColor: ESTILOS_COMUNS.cores.secundaria
    },
    avatar: {
        borderWidth: 1,
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black'
    },
    boxFrind: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
        backgroundColor: 'white',
        borderColor: ESTILOS_COMUNS.cores.azulSecundario,
        borderWidth: 0.5
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
        width: 60,
        height: 60,
        borderRadius: 30,
        position: 'absolute',
        bottom: 10,
        right: Dimensions.get('window').width * 1 / 2 - 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: ESTILOS_COMUNS.cores.principal,
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

const mapStateToProps = ({ friends }) => {
    return {
        cadastrados: friends.amigosCadastrados,
        telaSorteando: friends.telaSorteando
    }
}

const mapDispatchToProps = dispach => {
    return {
        openModal: mode => dispach(openModal(mode)),
        deleteFriend: id => dispach(deleteFriend(id)),
        addFriend: frind => dispach(addFriend(frind)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AmigoSecreto);
