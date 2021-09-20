import { TOGGLE_THEME_MODE } from './actionsTypes'

export const toggleThemeMode = _ => {
    return {
        type: TOGGLE_THEME_MODE,
        payload: _
    }
}