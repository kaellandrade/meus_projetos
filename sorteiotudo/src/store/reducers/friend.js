import { ADD_FRIEND, DELETE_ALL, DELETE_FRIEND, SORTEAR, UPDATE_FRIEND, TOGGLE_SCREEN_SORTED, SET_FRINDS } from "../actions/actionsTypes";
import { sortear } from '../../util/randomFriends'

const initialState = {
    amigosCadastrados: [
    ],
    sorteio: [],
    telaSorteando: false
}

reducer = (state = initialState, action) => {
    if (action.type === SET_FRINDS) {

        return {
            ...state,
            amigosCadastrados: action.payload ? action.payload : []
        }
    } else if (action.type === UPDATE_FRIEND) {
        return {
            ...state,
            amigosCadastrados: state.amigosCadastrados.map((friend) => {
                if (friend.id === action.payload.id)
                    return { ...friend, name: action.payload.name, email: action.payload.email }
                else
                    return friend
            }),
            sorteio: []
        }
    } else if (action.type === SORTEAR) {
        return {
            ...state,
            sorteio: sortear(state.amigosCadastrados)

        }
    } else if (action.type === DELETE_ALL) {
        return {
            ...state,
            amigosCadastrados: [],
            sorteio: []
        }
    } else if (action.type === TOGGLE_SCREEN_SORTED) {
        return {
            ...state,
            telaSorteando: !state.telaSorteando
        }
    }
    else {
        return state;
    }

}
export default reducer;