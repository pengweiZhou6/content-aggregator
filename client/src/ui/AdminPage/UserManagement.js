import React from 'react';
import MaterialTable from 'material-table';
import TableIcons from './TableIcons';
import server from '../../config/server';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import errorUtil from "../../ErrorUtil";

const userStyle = {
    marginTop: '4.5%',
    marginLeft: '5%',
    marginRight: '5%'
}



class UserManagement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            companies: [],
            companyNames: [],
            isLoaded: false,
        };
    }

    async componentDidMount() {
        try {
            const urlUser = new URL(`${server}/user`);
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
            this.setState({
                isLoaded: true,
                companies: resultCompany.companies,
                companyNames: resultCompany.companies.map((company) => {return company.name}),
                users: resultUser.users
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
            <div style={userStyle}>
                <MaterialTable
                    icons={TableIcons}
                    title="Users"
                    components={{
                        Container: props => <Paper {...props} elevation={0} />
                    }}
                    columns={[
                        { 
                            title: 'Name', 
                            field: 'name',
                            editable: 'never' 
                        },
                        { 
                            title: 'Email', 
                            field: 'email',
                            editable: 'never' 
                        },
                        { 
                            title: 'Company', 
                            field: 'company.name',
                            render: rowData => rowData.company && rowData.company.name,
                            editComponent: props => (
                                <Select
                                    value={props.value}
                                    onChange={e => {
                                        props.onChange(e.target.value);
                                    }}
                                >
                                    <MenuItem value={null}>None</MenuItem>
                                    {this.state.companyNames.map(companyName => 
                                        <MenuItem value={companyName}>{companyName}</MenuItem>
                                    )}
                                </Select>
                            )
                        },
                        {
                            title: 'Role',
                            field: 'role',
                            lookup: { 'USER': 'User', 'APPROVER': 'Approver', 'ADMIN': 'Admin' },
                        },
                        {
                            title: 'Created',
                            field: 'created_at',
                            render: rowData => rowData.created_at.substring(0,10),
                            editable: 'never',
                        },
                        {
                            title: 'Subscription',
                            field: 'subscription',
                            render: rowData => {
                                if (rowData.subscription === 0 || rowData.subscription === '0') {
                                    return "none"
                                }
                                else if (rowData.subscription === 1 || rowData.subscription === '1') {
                                    return "daily"
                                }
                                else return "weekly"
                            },
                            lookup: {0: "none", 1: "daily", 7: "weekly"}
                        }
                    ]}
                    data={this.state.users}
                    isLoading={!this.state.isLoaded}
                    editable={{
                        onRowUpdate: (newData, oldData) =>
                            new Promise(resolve => {
                                setTimeout(() => {
                                    resolve();
                                    const url = new URL(`${server}/user/` + newData.id);
                                    fetch(url, {
                                        method: 'PATCH',
                                        headers: {
                                            'Content-Type': 'application/json',
                                        },
                                        credentials: 'include',
                                        body: JSON.stringify({
                                            companyId: newData.company ? 
                                                (newData.company.name && this.state.companies.find(c => c.name===newData.company.name).id)
                                                : null,
                                            role: newData.role,
                                            subscription: newData.subscription
                                        }),
                                    }).then(errorUtil.handleErrors)
                                        .then((data) => {
                                            console.log(data);
                                        }).catch((error) => {
                                        alert(error);
                                        window.location.reload(false);
                                    });
                                    if (oldData) {
                                        this.setState(prevState => {
                                            const users = [...prevState.users];
                                            users[users.indexOf(oldData)] = newData;
                                            return { ...prevState, users };
                                        });
                                    }
                                }, 600);
                            }),
                        onRowDelete: oldData =>
                            new Promise(resolve => {
                                setTimeout(() => {
                                    resolve();
                                    const url = new URL(`${server}/user/` + oldData.id);
                                    fetch(url, {
                                        method: 'DELETE',
                                        headers: {
                                            'Content-Type': 'application/json',
                                        },
                                        credentials: 'include',
                                    }).then(errorUtil.handleErrors)
                                        .then((data) => {
                                            console.log(data);
                                        }).catch((error) => {
                                        alert(error);
                                        window.location.reload(false);
                                    });
                                    this.setState(prevState => {
                                        const users = [...prevState.users];
                                        users.splice(users.indexOf(oldData), 1);
                                        return { ...prevState, users };
                                    });
                                }, 600);
                            }),
                    }}
                    options={{
                        actionsColumnIndex: -1,
                        pageSize: 20,
                        pageSizeOptions: [10,20,30,40,50],
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

export default UserManagement;