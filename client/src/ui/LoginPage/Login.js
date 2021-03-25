import React from 'react';
import LoginPage from './LoginPage';
import server from '../../config/server';
import errorUtil from "../../ErrorUtil";

class Login extends React.Component {
    constructor() {
        super();
        this.state = { isAuthenticated: false, user: null, token: ''};
    }

    logout = () => {
        this.setState({isAuthenticated: false, token: '', user: null})
    };

    onFailure = (error) => {
        alert("Fail to log in though Google");
    };

    googleResponse = async (response) => {
        const tokenBlob = new Blob([JSON.stringify({access_token: response.accessToken}, null, 2)], {type : 'application/json'});
        const options = {
            method: 'POST',
            body: tokenBlob,
            mode: 'cors',
            credentials: 'include',
            cache: 'default'
        };
        try {
            const response = await fetch(`${server}/auth/google`, options);
            errorUtil.handleErrors(response);
            const token = response.headers.get('x-auth-token');
            if (token) {
                const user = await response.json();
                this.setState({ isAuthenticated: true, user, token });

            }
        } catch (e) {
            console.log(e);
        }
        window.location.href= "/";
    };

    render() {
        return(
            <div className="Login">
                <LoginPage state={this.state} logout = {this.logout}
                           onFailure={this.onFailure} googleResponse={this.googleResponse}/>
            </div>
        );
    }
}

export default Login;