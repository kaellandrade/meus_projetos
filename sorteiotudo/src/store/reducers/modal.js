import { OPEN_MODAL, CLOSE_MODAL } from "../actions/actionsTypes";
const initialState = {
    showModal: false,
    updateMode: false,
}

reducerModal = (state = initialState, action) => {
    if (action.type === OPEN_MODAL) {
        return {
            ...state,
            showModal: true,
            updateMode: action.payload
        }
    } else if (action.type === CLOSE_MODAL) {
        return {
            ...state,
            showModal: false
        }
    } else {
        return state;
    }

}

export default reducerModal