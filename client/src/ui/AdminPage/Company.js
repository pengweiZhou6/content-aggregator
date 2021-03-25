import React from 'react';
import MaterialTable from 'material-table';
import TableIcons from './TableIcons';
import server from '../../config/server';
import Paper from '@material-ui/core/Paper';
import errorUtil from "../../ErrorUtil";

const companyStyle = {
    marginTop: '4.5%',
    marginLeft: '5%',
    marginRight: '5%'
}

class Company extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                { title: 'Name', field: 'name' }
            ],
            data: [],
            isLoaded: false,
        };
    }

    async componentDidMount() {
        try {
            const url = new URL(`${server}/company`);

            const response = await fetch(url, {
                method: 'GET',
                credentials: 'include'
            });
            const result = await errorUtil.handleErrors(response).json();
            this.setState({
                isLoaded: true,
                data: result.companies
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
            <div style={companyStyle}>
                <MaterialTable
                    icons={TableIcons}
                    title="Companies"
                    columns={this.state.columns}
                    data={this.state.data}
                    isLoading={!this.state.isLoaded}
                    components={{
                        Container: props => <Paper {...props} elevation={0} />
                    }}
                    editable={{
                        onRowAdd: newData =>
                        new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            const url = new URL(`${server}/company`);
                            fetch(url, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                credentials: 'include',
                                body: JSON.stringify({
                                    company: newData.name
                                }),
                            }).then(errorUtil.handleErrors)
                                .then((data) => {
                                    window.location.reload(false);
                                }).catch((error) => {
                                alert(error);
                                window.location.reload(false);
                            });
                            this.setState(prevState => {
                            const data = [...prevState.data];
                            data.push(newData);
                            return { ...prevState, data };
                            });
                        }, 600);
                        }),
                        onRowDelete: oldData =>
                            new Promise(resolve => {
                                setTimeout(() => {
                                    resolve();
                                    const url = new URL(`${server}/company/` + oldData.id);
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
                                        const data = [...prevState.data];
                                        data.splice(data.indexOf(oldData), 1);
                                        return { ...prevState, data };
                                    });
                                }, 600);
                            }),
                    }}
                    localization={{ body: { editRow: { deleteText: 'Are you sure you want to delete this Company?' } } }}
                    options={{
                        actionsColumnIndex: -1,
                        pageSize: 10,
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

export default Company;