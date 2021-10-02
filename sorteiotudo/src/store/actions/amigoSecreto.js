import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    ADD_FRIEND,
    DELETE_FRIEND,
    SORTEAR,
    UPDATE_FRIEND,
    DELETE_ALL,
    TOGGLE_SCREEN_SORTED,
    SET_FRINDS
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
const deleteAllFriends = _ => {
    return {
        type: DELETE_ALL
    }
}

const updateFriend = friendId => {
    return {
        type: UPDATE_FRIEND,
        payload: friendId
    }
}

const sortear = value => {
    return {
        type: SORTEAR,
        payload: value
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
const addStorageFriend = ({name, email}) => {
    return async function (dispach) {
        const amigos = await AsyncStorage.getItem("@amigos_cadastrados") || '[]'
        const amigosArray = JSON.parse(amigos)
        amigosArray.push({ name, email, id: Math.random() })
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



export {
    updateFriend,
    sortear,
    deleteAllFriends,
    toggle_sortear,
    setFrinds,
    getfrindStorage,
    addStorageFriend,
    deleteStorageFriend
}