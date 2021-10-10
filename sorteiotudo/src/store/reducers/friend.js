import {
    DELETE_ALL,
    SORTEAR,
    TOGGLE_SCREEN_SORTED,
    SET_FRINDS,
    PESQUISAR
} from "../actions/actionsTypes";
import { sortear } from '../../util/randomFriends'

const initialState = {
    amigosCadastrados: [
    ],
    sorteio: [],
    telaSorteando: false
}

reducer = (state = initialState, action) => {
    const { payload, type } = action;
    if (type === SET_FRINDS) {
        return {
            ...state,
            amigosCadastrados: payload ? payload : []
        }
    } else if (type === SORTEAR) {
        return {
            ...state,
            sorteio: sortear(state.amigosCadastrados)

        }
    } else if (type === DELETE_ALL) {
        return {
            ...state,
            amigosCadastrados: [],
            sorteio: []
        }
    } else if (type === TOGGLE_SCREEN_SORTED) {
        return {
            ...state,
            telaSorteando: !state.telaSorteando
        }
    } else if (type === PESQUISAR) {
        const { payload } = action;
        return {
            ...state,
            amigosCadastrados: state.amigosCadastrados.filter(({ name }) => name == payload)
        }
    }
    else {
        return state;
    }

}
export default reducer;