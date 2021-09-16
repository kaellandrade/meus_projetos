import { ADD_FRIEND, DELETE_FRIEND, SORTEAR, UPDATE_FRIEND, DELETE_ALL, TOGGLE_SCREEN_SORTED} from './actionsTypes';
/**
 * Ações relacionadas a tela amigo secreto.
 */
const addFriend = friend => {
    return {
        type: ADD_FRIEND,
        payload: friend
    }
}

const deleteFriend = friendId => {
    return {
        type: DELETE_FRIEND,
        payload: friendId
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

export { addFriend, deleteFriend, updateFriend, sortear, deleteAllFriends, toggle_sortear }