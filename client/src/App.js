import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Home from './ui/HomePage/Home.js';
import UnpublishedPosts from './ui/AdminPage/UnpublishedPosts';
import PublishedPosts from './ui/AdminPage/PublishedPosts';
import UserManagement from './ui/AdminPage/UserManagement';
import BlogStream from './ui/AdminPage/BlogStream';
import Category from './ui/AdminPage/Category';
import Company from './ui/AdminPage/Company';
import Settings from './ui/AdminPage/Settings';
import Login from './ui/LoginPage/Login';
import { history, role } from './helpers';
import CustomRoute from './ui/components/CustomRoute';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import Profile from "./ui/ProfilePage/Profile";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const footerStyle = {
  backgroundColor: "#D3D3D3",
  height: "50px",
  textAlign: "center"
}

const contentStyle = {
  minHeight: "calc(100vh - 50px)"
}

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'IBM Plex Serif', 'Roboto', 'Helvetica', 'Segoe UI', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'
    ].join(','),
  }
});


class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <div style={contentStyle}>
            <Router history={history}>
              <Switch>
                <CustomRoute component={PublishedPosts} roles={[role.admin]} path="/admin/publishedPosts" />
                <CustomRoute component={UnpublishedPosts} roles={[role.admin, role.approver]} path="/admin/unpublishedPosts" />
                <CustomRoute component={UserManagement} roles={[role.admin]} path="/admin/users" />
                <CustomRoute component={BlogStream} roles={[role.admin, role.approver]} path="/admin/streams" />
                <CustomRoute component={Category} roles={[role.admin]} path="/admin/categories" />
                <CustomRoute component={Company} roles={[role.admin]} path="/admin/companies" />
                <CustomRoute component={Settings} roles={[role.admin]} path="/admin/settings" />
                <Route component={Login} path="/login" />
                <CustomRoute component={Profile} roles={[role.admin, role.approver, role.user]} path="/profile" />
                <CustomRoute component={Home} roles={[role.admin, role.approver, role.user]} path="/" />
              </Switch>
            </Router>
          </div>
          <Paper value="footer" style={footerStyle} >
            <Typography variant="caption" align={"center"}>
              Contact Us at help@contentaggregator.com
          </Typography>
          </Paper>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
