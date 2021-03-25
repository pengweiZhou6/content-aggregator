import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import logoImage from '../../logo.png';
import Divider from '@material-ui/core/Divider';
import PostAddIcon from '@material-ui/icons/PostAdd';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BookIcon from '@material-ui/icons/Book';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import PeopleIcon from '@material-ui/icons/People';
import CategoryIcon from '@material-ui/icons/Category';
import BusinessIcon from '@material-ui/icons/Business';
import SettingsIcon from '@material-ui/icons/Settings';
import { authenticationService } from '../../services';
import LightTooltip from "../components/LightTooltip";

const useStyles = makeStyles(theme => ({
  palette: {
    primary: purple,
    secondary: green,
  },
  grow: {
    flexGrow: 0.93
  },
  submitButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    color: 'white',
    fontSize: '20px',
    marginLeft: "5%"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
}));



export default function NavBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const redirectToPublishedPosts = () => {
    handleMenuClose();
    props.history.push("/admin/publishedPosts");
  }

  const redirectToUnpublishedPosts = () => {
    handleMenuClose();
    props.history.push("/admin/unpublishedPosts");
  }

  const redirectToUsers = () => {
    handleMenuClose();
    props.history.push("/admin/users");
  }

  const redirectToCategories = () => {
    handleMenuClose();
    console.log(props.userRole);
    props.history.push("/admin/categories");
  }

  const redirectToCompanies = () => {
    handleMenuClose();
    props.history.push("/admin/companies");
  }

  const redirectToStreams = () => {
    handleMenuClose();
    props.history.push("/admin/streams");
  }

  const redirectToSettings = () => {
    handleMenuClose();
    props.history.push("/admin/settings");
  }

  const redirectToLogin = () => {
    authenticationService.logout();
    props.history.push("/login");
  }

  const redirectToProfile = () => {
    props.history.push("/profile");
  }

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" color='inherit'>
        <Toolbar>
          <Link to="/home" className={classes.title} >
            <img src={logoImage} width={60} height={60} alt="" />
          </Link>
          <div className={classes.grow} />
          <div>
            <LightTooltip title='Profile'>
              <IconButton
                edge="start"
                aria-label="account of current user"
                color="inherit"
                onClick={redirectToProfile}
              >
                <AccountCircle fontSize="large" />
              </IconButton>
            </LightTooltip>

            {(props.userRole === "APPROVER" || props.userRole === "ADMIN") &&
              <LightTooltip title='System'>
                <IconButton
                  aria-controls={"simple-menu"}
                  aria-haspopup="true"
                  aria-label="admin settings"
                  onClick={handleMenuOpen}
                  color="inherit"
                >
                  <MenuIcon fontSize="large" />
                </IconButton>
              </LightTooltip>
            }

            <LightTooltip title='Logout'>
              <IconButton
                edge="end"
                aria-label="account of current user"
                color="inherit"
                onClick={redirectToLogin}
              >
                <ExitToAppIcon fontSize="large" />
              </IconButton>
            </LightTooltip>

            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              getContentAnchorEl={null}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {props.userRole === "ADMIN" &&
                <MenuItem onClick={redirectToPublishedPosts}>
                  <ListItemIcon>
                    <LibraryBooksIcon />
                  </ListItemIcon>
                  <ListItemText primary="Posts" />
                </MenuItem>
              }
              {props.userRole === "ADMIN" &&
                <MenuItem onClick={redirectToStreams}>
                  <ListItemIcon>
                    <BookIcon />
                  </ListItemIcon>
                  <ListItemText primary="Blogs" />
                </MenuItem>
              }
              {(props.userRole === "ADMIN" || props.userRole === "APPROVER") &&
                <MenuItem onClick={redirectToUnpublishedPosts}>
                  <ListItemIcon>
                    <PostAddIcon />
                  </ListItemIcon>
                  <ListItemText primary="Approvals" />
                </MenuItem>
              }

              {props.userRole === "ADMIN" &&
                <Divider />
              }

              {props.userRole === "ADMIN" &&
                <MenuItem onClick={redirectToUsers}>
                  <ListItemIcon>
                    <PeopleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Users" />
                </MenuItem>
              }
              {props.userRole === "ADMIN" &&
                <MenuItem onClick={redirectToCategories}>
                  <ListItemIcon>
                    <CategoryIcon />
                  </ListItemIcon>
                  <ListItemText primary="Categories" />
                </MenuItem>
              }
              {props.userRole === "ADMIN" &&
                <MenuItem onClick={redirectToCompanies}>
                  <ListItemIcon>
                    <BusinessIcon />
                  </ListItemIcon>
                  <ListItemText primary="Companies" />
                </MenuItem>
              }

              {props.userRole === "ADMIN" &&
                <Divider />
              }

              {props.userRole === "ADMIN" &&
                <MenuItem onClick={redirectToSettings}>
                  <ListItemIcon>
                    <SettingsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
                </MenuItem>
              }

            </Menu>


          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}
