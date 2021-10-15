
/**
 * 
 * @param {string} email 
 * @returns Boolean
 */
const validateEmail = (email) => {
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regexEmail.test(String(email).toLowerCase());
}
/**
 * 
 * @param {String} name 
 * @returns Boolea
 * TODO: Implementar essa função
 */
const validateName = (name) => {
    return null
}

export { validateEmail }