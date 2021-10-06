import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ESTILOS_COMUNS } from '../styles/estilosComuns';
import Icon from 'react-native-vector-icons/Ionicons'
import { SearchBar } from 'react-native-elements';
import { connect } from 'react-redux'
import { pesquisar, getfrindStorage } from '../store/actions/amigoSecreto'
const Painel = props => {
    const [search, setSearch] = useState('')
    const styleTheme = props.darkMode ? { backgroundColor: 'black', color: 'white' } : { backgroundColor: 'white', color: 'black' }
    return (
        <View style={[estilos.painel, styleTheme]}>
            <View style={estilos.painelpesquisa}>
                <SearchBar
                    placeholder="Procurar amigo..."
                    lightTheme={!props.darkMode}
                    containerStyle={{ padding: 0 }}
                    value={search}
                    onChangeText={value => setSearch(value)}
                    style={{ fontFamily: ESTILOS_COMUNS.fontPrincipal.light }}
                    onSubmitEditing={_ => props.pesquisarAmigo(search)}
                    onClear={props.getfrindStorage}
                />
            </View>
            <View style={[estilos.painelContagem]}>
                <Icon
                    color={ESTILOS_COMUNS.cores.azulPrimario}
                    name='person-add-outline'
                    size={ESTILOS_COMUNS.iconesTamanhos.grande} />
                <Text style={[estilos.placar, styleTheme]}>{props.totalFrinds}</Text>
            </View>
        </View>
    );
}

const estilos = StyleSheet.create({
    placar: {
        fontFamily: ESTILOS_COMUNS.fontPrincipal.light,
        fontSize: 30,
    },
    painel: {
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between',
    },
    painelpesquisa: {
        width: '70%',
        padding: 0,
        margin: 0,
    },
    painelContagem: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'space-around'
    },


})

const mapStateToProps = ({ config }) => {
    return {
        darkMode: config.darkMode
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        pesquisarAmigo: valor => dispatch(pesquisar(valor)),
        getfrindStorage: _ => dispatch(getfrindStorage())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Painel);