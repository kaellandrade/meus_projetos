import { CLOSE_MODAL, OPEN_MODAL } from './actionsTypes'

export const closeModal = _ => {
    return {
        type: CLOSE_MODAL,
        payload: _
    }
}
export const openModal = (mode = false) => {
    return {
        type: OPEN_MODAL,
        payload: mode
    }
}