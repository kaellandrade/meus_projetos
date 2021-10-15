import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    SORTEAR,
    TOGGLE_SCREEN_SORTED,
    SET_FRINDS,
    PESQUISAR
} from './actionsTypes';
/**
 * Ações relacionadas a tela amigo secreto.
 */

const setFrinds = friends => {
    return {
        type: SET_FRINDS,
        payload: friends
    }
}


const sortear = value => {
    return {
        type: SORTEAR,
        payload: value
    }
}

const pesquisar = nameOrEmail =>{
    return {
        type:PESQUISAR,
        payload:nameOrEmail
    }
}

const toggle_sortear = _ => {
    return {
        type: TOGGLE_SCREEN_SORTED,
    }
}

/**
 * Recupera os amigos cadastrados no LocalStorage.
 */
function getfrindStorage() {
    return async function (dispatch) {
        const amigos = await AsyncStorage.getItem("@amigos_cadastrados")
        try {
            return dispatch(setFrinds(JSON.parse(amigos)))

        } catch (error) {
            console.log(error)
        }
    }
}

/**
 * Adiciona um amigo ao Local Storage. 
 * TODO: Tratamento de erros.
 */
const addStorageFriend = ({ name, email }) => {
    return async function (dispach) {
        const amigos = await AsyncStorage.getItem("@amigos_cadastrados") || '[]'
        const amigosArray = JSON.parse(amigos)
        amigosArray.push({ name:name.trim(), email, id: Math.random() })
        await AsyncStorage.setItem("@amigos_cadastrados", JSON.stringify(amigosArray))
        try {
            return dispach(getfrindStorage())
        } catch (error) {
            console.log(error);
        }
    }
}
/**
 * Deleta um amigo do LocalStorage.
 */
const deleteStorageFriend = (key) => {
    return async function (dispach) {
        const amigos = await AsyncStorage.getItem("@amigos_cadastrados") || '[]'
        let amigosArray = JSON.parse(amigos)
        amigosArray = amigosArray.filter(({ id }) => (id != key))
        await AsyncStorage.setItem("@amigos_cadastrados", JSON.stringify(amigosArray))

        try {
            return dispach(getfrindStorage())
        } catch (error) {
            console.log(error);
        }
    }
}

/**
 * Deleta todos os amigos cadastrados.
 */
const deleteStorageAllFriends = _ =>{
    return async function(dispach){
        await AsyncStorage.setItem("@amigos_cadastrados", "[]");
        try{
            return dispach(getfrindStorage());
        }catch(error){
            console.log(error);
        }
    }
}

/**
 * Recebe os novos valores de um amigo e atualiza-o.
 */
const updateStorageFriend = ({ name, email, id }) => {
    return async function (dispach) {

        const amigos = await AsyncStorage.getItem("@amigos_cadastrados") || '[]'
        let amigosArray = JSON.parse(amigos)

        amigosArray = amigosArray.map((friend) => {
            if (friend.id === id) {
                return { ...friend, name: name.trim(), email: email }
            }
            else {
                return friend
            }
        }),
            await AsyncStorage.setItem("@amigos_cadastrados", JSON.stringify(amigosArray))
        try {
            return dispach(getfrindStorage())
        } catch (error) {
            console.log(error);
        }
    }
}



export {
    sortear,
    toggle_sortear,
    setFrinds,
    getfrindStorage,
    addStorageFriend,
    deleteStorageFriend,
    updateStorageFriend,
    pesquisar,
    deleteStorageAllFriends
}