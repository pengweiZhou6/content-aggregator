import React from 'react';
import MaterialTable from 'material-table';
import TableIcons from './TableIcons';
import server from '../../config/server';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import errorUtil from "../../ErrorUtil";

const postStyle = {
    marginTop: '4.5%',
    marginLeft: '5%',
    marginRight: '5%'
}


class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            adminThr: 0,
            userThr: 0,
            isLoaded: false,
        };
    }

    async componentDidMount() {
        try {
            const url = new URL(`${server}/setting`);

            const response = await fetch(url, {
                method: 'GET',
                credentials: 'include'
            });

            const result = await errorUtil.handleErrors(response).json();
            this.setState({
                isLoaded: true,
                adminThr: result.settings.find(o => o.name === "Admin Approval Threshold").value,
                userThr: result.settings.find(o => o.name === "User Approval Threshold").value
            });
        } catch (error) {
            alert(error);
            this.setState({
                isLoaded: true,
                error
            });
        }
    }

    render() {
        return (
            <div className="publishedPage" style={postStyle}>
                <MaterialTable
                    icons={TableIcons}
                    title="Settings"
                    components={{
                        Container: props => <Paper {...props} elevation={0} />
                    }}
                    columns={[
                        {
                            title: 'Parameter',
                            field: 'parameter',
                            editable: 'never',
                        },
                        {
                            title: 'Threshold',
                            field: 'threshold',
                            editComponent: props => (
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="Threshold"
                                    type="number"
                                    InputProps={{ inputProps: { min: 1, max: 30 } }}
                                    defaultValue={props.value}
                                    onKeyDown={ (e) => ( e.keyCode === 69 || e.keyCode === 190 ) && e.preventDefault() }
                                    onChange = {e => props.onChange(e.target.value)}
                                />
                            )
                        }
                    ]}
                    data={[
                        {parameter: 'Admin', threshold: this.state.adminThr},
                        {parameter: 'Approver/User', threshold: this.state.userThr},
                    ]}
                    isLoading={!this.state.isLoaded}
                    editable={{
                        onRowUpdate: (newData, oldData) =>
                            new Promise(resolve => {
                                setTimeout(() => {
                                    resolve();
                                    const settingType = newData.parameter==="Admin" ? "Admin Approval Threshold" : "User Approval Threshold";
                                    const settingThreshold = parseInt(newData.threshold);
                                    const url = new URL(`${server}/setting`);
                                    fetch(url, {
                                        method: 'PATCH',
                                        headers: {
                                            'Content-Type': 'application/json',
                                        },
                                        credentials: 'include',
                                        body: JSON.stringify({
                                            settingName: settingType,
                                            settingValue: settingThreshold
                                        }),
                                    }).then(errorUtil.handleErrors)
                                    .then((data) => {
                                        console.log(data);
                                        window.location.reload(false);
                                    }).catch((error) => {
                                        alert(error);
                                    });
                                }, 600);
                            }),
                    }}
                    options={{
                        actionsColumnIndex: -1,
                        paging: false,
                        color: "FFF",
                        headerStyle: {
                            backgroundColor: '#ECE9E9',
                            borderColor: '#070000'
                        },
                        cellStyle: {
                            padding: 20
                        },
                    }}
                />
            </div>
        );
    }
}

export default Settings;