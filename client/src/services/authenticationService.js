import Cookies from 'js-cookie'

function getSession() {
    return Cookies.get('_session');
}

function logout() {
    Cookies.remove('_session');
}

export const authenticationService = {
    logout,
    getSession
};