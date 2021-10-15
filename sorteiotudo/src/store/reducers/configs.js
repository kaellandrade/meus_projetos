import { TOGGLE_THEME_MODE } from "../actions/actionsTypes";
const initialState = {
    darkMode: false
}
/**
 * Salvar e capturar do Storage o tema Dark ou Light.
 */
reduceConfigs = (state = initialState, action) => {
    if (action.type === TOGGLE_THEME_MODE) {
        return {
            ...state,
            darkMode: !state.darkMode
        }
    } else {
        return state;
    }

}

export default reduceConfigs