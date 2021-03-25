import React from 'react';
import server from '../../config/server';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import errorUtil from "../../ErrorUtil";
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import LightTooltip from "../components/LightTooltip";

const profileStyle = {
    paddingTop: '10%',
    marginRight: '5%',
    marginLeft: '5%'
}

const selectStyle = {
    fontSize: '1.5rem',
    paddingLeft: '5px'
}

const textStyle = {
    userSelect: 'none'
}

const iconStyle = {
    verticalAlign: 'sub',
    paddingLeft: '10px'
}

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            creationTime: '',
            isLoaded: false,
            companyName: null,
            subscriptionType: 0,
            editMode: false,
            mouseOver: false,
            companies: [],
        };
    }

    fetchInfo = async () => {
        try {
            console.log(this.props);
            const urlUser = new URL(`${server}/user/current`);
            const param = { id: this.props.userId };
            urlUser.search = new URLSearchParams(param).toString();
            const urlCompany = new URL(`${server}/company`);

            const responseUser = await fetch(urlUser, {
                method: 'GET',
                credentials: 'include'
            });
            const responseCompany = await fetch(urlCompany, {
                method: 'GET',
                credentials: 'include'
            });

            const resultUser = await errorUtil.handleErrors(responseUser).json();
            const resultCompany = await errorUtil.handleErrors(responseCompany).json();
            const subscription = resultUser.users[0].subscription;

            this.setState({
                isLoaded: true,
                user: resultUser.users[0],
                creationTime: new Date(resultUser.users[0].created_at).toLocaleDateString(),
                companyName: resultUser.users[0].company_id,
                subscriptionType: subscription,
                companies: resultCompany.companies,
            });

        } catch (error) {
            alert(error);
            this.setState({
                isLoaded: true,
                error
            });
        }

    }

    componentDidMount() {
        this.fetchInfo();
    }

    handleListChange = async event => {
        let response;
        try {
            const url = new URL(`${server}/user/` + this.props.userId);
            response = await fetch(url, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({
                    subscription: event.target.value
                }),
            })
            await errorUtil.handleErrors(response);
        } catch (error) {
            alert(error);
            console.log(error);
        }

        this.setState({
            subscriptionType: event.target.value
        });
        window.location.reload(false);
    }

    handleCompanyListChange = async event => {
        let response;
        try {
            const url = new URL(`${server}/user/` + this.props.userId);
            response = await fetch(url, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({
                    companyId: event.target.value
                }),
            })
            await errorUtil.handleErrors(response);
        } catch (error) {
            alert(error);
            console.log(error);
        }
        window.location.reload(false);
    }

    render() {
        return (
            <Card elevation={0} style={profileStyle}>
                <CardContent>
                    <Typography style={textStyle} variant="h5" component="h2">
                        Name: {this.state.user.name}
                    </Typography>
                    <Divider />

                    <Typography style={textStyle} variant="h5" component="h2">
                        Email: {this.state.user.email}
                    </Typography>
                    <Divider />

                    <Typography style={textStyle} variant="h5" component="h2">
                        Role: {this.state.user.role}
                    </Typography>
                    <Divider />

                    <Typography style={textStyle} variant="h5" component="h2">
                        Registed On: {this.state.creationTime}
                    </Typography>
                    <Divider />

                    <Typography style={textStyle} variant="h5" component="h2">
                        Company:
                            <Select
                            labelId="companyList"
                            labelWidth={0}
                            id="companies"
                            onChange={this.handleCompanyListChange}
                            displayEmpty={true}
                            disableUnderline
                            style={selectStyle}
                            value={this.state.companyName}
                        >
                            <MenuItem value={null}>None</MenuItem>
                            {
                                this.state.companies.map(cn =>
                                    <MenuItem key={cn.id} value={cn.id}>{cn.name}</MenuItem>)
                            }
                        </Select>
                    </Typography>
                    <Divider />

                    <Typography style={textStyle} variant="h5" component="h2" >
                        Subscription:
                            <Select
                            labelId="subcriptionList"
                            labelWidth={0}
                            id="subcription"
                            onChange={this.handleListChange}
                            displayEmpty={true}
                            value={this.state.subscriptionType}
                            disableUnderline
                            style={selectStyle}
                        >
                            <MenuItem value={0}>None</MenuItem>
                            <MenuItem value={1}>Daily</MenuItem>
                            <MenuItem value={7}>Weekly</MenuItem>
                        </Select>
                        <LightTooltip title='Manage email subscription status. Can choose to receive emails about new content on a daily or weekly basis.'>
                            <HelpOutlineIcon style={iconStyle}/>
                        </LightTooltip>
                    </Typography>
                </CardContent>
            </Card>
        )
    }
}

export default Profile;