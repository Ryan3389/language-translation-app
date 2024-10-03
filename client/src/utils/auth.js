class AuthService {

    loggedIn() {
        const token = this.getToken();
        return token ? true : false;
    }

    getToken() {

        return localStorage.getItem('id_token');
    }

    login(idToken) {

        localStorage.setItem('id_token', idToken);
        window.location.assign('/dashboard');
    }

    logout() {

        localStorage.removeItem('id_token');
        window.location.assign('/');
    }
}

export default new AuthService();
