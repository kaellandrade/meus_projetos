import { ADD_FRIEND, DELETE_FRIEND, SORTEAR, UPDATE_FRIEND } from "../actions/actionsTypes";
import { sortear } from '../../util/randomFriends'
const initialState = {
    amigosCadastrados: [
        { id: Math.random(), name: 'Micael Andrade', email: "mikael.java@gmail.com" },
        { id: Math.random(), name: 'Joice Andrade', email: "joice.java@gmail.com" },
        { id: Math.random(), name: 'Paulo Andrade', email: "mikael.java@gmail.com" },
        { id: Math.random(), name: 'Dani Andrade', email: "mikael.java@gmail.com" },
        { id: Math.random(), name: 'Manoel Andrade', email: "mikael.java@gmail.com" },
        { id: Math.random(), name: 'Jéssica Andrade', email: "mikael.java@gmail.com" }
    ],
    sorteio: [],
    telaSorteando: false
}

reducer = (state = initialState, action) => {
    if (action.type === ADD_FRIEND) {
        const newFrind = {
            id: Math.random(),
            ...action.payload
        }
        return {
            ...state,
            amigosCadastrados: state.amigosCadastrados.concat(newFrind)
        }
    } else if (action.type === DELETE_FRIEND) {
        return {
            ...state,
            amigosCadastrados: state.amigosCadastrados.filter(({ id }) => (id != action.payload))
        }
    } else if (action.type === UPDATE_FRIEND) {
        return {
            ...state,
            amigosCadastrados: state.amigosCadastrados.map((friend) => {
                if (friend.id === action.payload.id)
                    return { ...friend, name: action.payload.name, email: action.payload.email }
                else
                    return friend
            })
        }
    } else if (action.type === SORTEAR) {
        return {
            ...state,
            telaSorteando: action.payload,
            sorteio: sortear(state.amigosCadastrados)
        }
    }
    else {
        return state;
    }

}
export default reducer;