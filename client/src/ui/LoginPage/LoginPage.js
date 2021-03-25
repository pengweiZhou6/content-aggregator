import React from 'react';
import GoogleLogin from "react-google-login";
import clientId from '../../config/googleClientId';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logoImage from '../../logo.png';
import vancouverBackground from '../../vancouver.jpg';
import galvanizeImage from '../../galvanize.jpg';
import hootsuiteImage from '../../hootsuite.jpg';
import clioImage from '../../clio.png';
import procurifyImage from '../../procurify.png';
import radicalIOImage from '../../radical.io.png';
import tasktopImage from '../../tasktop.png';
import '../../uiStyling.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import ContentCard from '../components/ContentCard';
import { postService } from '../../services';

const styles = theme => ({
    root: {
        backgroundColor: 'white'
    },
    loginGrow: {
        flexGrow: 1
    },
    loginPaper: {
        left: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    appBar: {
        backgroundColor: '#fff'
    },
    toolBar: {
        marginLeft: '5%',
        marginRight: '5%'
    },
    googleLogin: {
        border: '1px solid #0033cc !important',
        boxShadow: 'none !important'
    }
})

class LoginPage extends React.Component {
    constructor() {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            topPosts: []
        };
    }

    async componentDidMount() {
        try {
            const topPosts = await postService.fetchFeaturedPosts();
            this.setState({
                isLoaded: true,
                topPosts: topPosts.posts
            });
        } catch (error) {
            this.setState({
                isLoaded: true,
                error
            });
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <div>
                    <AppBar className={classes.appBar} position="fixed">
                        <Toolbar className={classes.toolBar}>
                            <img src={logoImage} width={60} height={60} alt="" />
                            <div className={classes.loginGrow}></div>
                            <GoogleLogin
                                className={classes.googleLogin}
                                clientId={clientId}
                                buttonText="Login"
                                onSuccess={this.props.googleResponse}
                                onFailure={this.props.onFailure}
                            />
                        </Toolbar>
                    </AppBar>
                </div>

                <div className="loginImage">
                    <img src={vancouverBackground} width="100%" height="300" crop="fill" alt="" />
                    <h2><span> Vancouver's Code Hub </span></h2>
                    <h5>Local stories by local developers</h5>
                </div>

                <div className="landingPostsWords">
                    Today's top posts
                </div>

                <div className="landingPosts">
                    {this.state.topPosts && this.state.topPosts.map(post =>
                        <ContentCard key={post.id} {...post} />)}
                </div>

                <div className="landingCommunity">
                    <h2><span>Join the community</span></h2>
                    <Grid className="communityList" container spacing={1} alignItems="center">
                        <Grid item xs={2} ></Grid>
                        <Grid item xs={3} >
                            <img src={galvanizeImage} width="80%" height="80%" alt="" />
                        </Grid>
                        <Grid item xs={3}>
                            <img src={hootsuiteImage} width="80%" height="80%" alt="" />
                        </Grid>
                        <Grid item xs={3}>
                            <img src={procurifyImage} width="80%" height="80%" alt="" />
                        </Grid>
                        <Grid item xs={2} ></Grid>
                    </Grid>
                    <Grid className="communityList" container spacing={1} alignItems="center">
                        <Grid item xs={2} ></Grid>
                        <Grid item xs={3}>
                            <img src={radicalIOImage} width="80%" height="80%" alt="" />
                        </Grid>
                        <Grid item xs={3}>
                            <img src={tasktopImage} width="80%" height="80%" alt="" />
                        </Grid>
                        <Grid item xs={3}>
                            <img src={clioImage} width="80%" height="80%" alt="" />
                        </Grid>
                        <Grid item xs={2} ></Grid>
                    </Grid>
                </div>

                <div className="connectionPart">
                    <h2><span>Stay connected to what's happening in the city</span></h2>
                </div>
            </div>
        );
    }
}

LoginPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginPage);