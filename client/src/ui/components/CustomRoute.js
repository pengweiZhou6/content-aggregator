import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import NavBar from './NavBar';
import { authenticationService, userService } from '../../services';

const CustomRoute = ({ component, roles, ...rest }) => (
    <Route {...rest} render={(props) => <AuthenticatedComponent {...props} component={component} roles={roles} />} />
)

function AuthenticatedComponent(props) {
    const [user, setUser] = useState({});
    // fetch current role
    useEffect(() => {
        userService.getCurrentSessionInfo().then((user) => setUser(user));
    }, [user.role]);

    const activeSession = authenticationService.getSession();
    if (!activeSession) {
        // not logged in so redirect to login page with the return url
        return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    }


    // check if route is restricted by role
    if (props.roles && user && user.role && props.roles.indexOf(user.role) === -1) {
        // role not authorised so redirect to home page
        return <Redirect to={{ pathname: '/' }} />
    }

    return user && user.role ?
        <div>
            <NavBar history={props.history} userRole={user.role}/>
            {React.createElement(props.component, {history: props.history, userRole: user.role, userId: user.id})}
        </div> :
        <div />;
}

export default CustomRoute;