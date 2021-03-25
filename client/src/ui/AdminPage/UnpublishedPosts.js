import React from 'react';
import MaterialTable from 'material-table';
import TableIcons from './TableIcons';
import server from '../../config/server';
import Link from '@material-ui/core/Link';
import { postService } from '../../services';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import errorUtil from "../../ErrorUtil";

const approvalStyle = {
    marginTop: '4.5%',
    marginLeft: '5%',
    marginRight: '5%'
}

class UnpublishedPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            DateLength: 10,
            posts: [],
            companies: [],
            companyNames: [],
            categories: [],
            categoryNames: [],
            isLoaded: false,
            adminThr: 0,
            userThr: 0,
        };
    }

    fetchData = async () => {
        try {
            const postParams = { isPublished: false };
            const resultPosts = await postService.fetchPosts(postParams);
            const urlSettings = new URL(`${server}/setting`);
            const urlCompany = new URL(`${server}/company`);
            const urlCategory = new URL(`${server}/category`);

            const responseCompany = await fetch(urlCompany, {
                method: 'GET',
                credentials: 'include'
            });
            const responseCategory = await fetch(urlCategory, {
                method: 'GET',
                credentials: 'include'
            });
            const responseSettings = await fetch(urlSettings, {
                method: 'GET',
                credentials: 'include'
            });


            const resultCompany = await errorUtil.handleErrors(responseCompany).json();
            const resultCategory = await errorUtil.handleErrors(responseCategory).json();
            const resultSettings = await errorUtil.handleErrors(responseSettings).json();

            this.setState({
                isLoaded: true,
                posts: resultPosts.posts,
                companies: resultCompany.companies,
                companyNames: resultCompany.companies.map((company) => { return company.name }),
                categories: resultCategory.categories,
                categoryNames: resultCategory.categories.map((category) => { return category.name }),
                adminThr: resultSettings.settings.find(o => o.name === "Admin Approval Threshold").value,
                userThr: resultSettings.settings.find(o => o.name === "User Approval Threshold").value
            });
        } catch (error) {
            alert(error);
            this.setState({
                isLoaded: true,
                error
            });
        }
    }

    async componentDidMount() {
        this.fetchData();
    }

    render() {
        return (
            <div style={approvalStyle}>
                <MaterialTable
                    icons={TableIcons}
                    title="Approvals"
                    components={{
                        Container: props => <Paper {...props} elevation={0} />
                    }}
                    columns={[
                        {
                            title: 'Title',
                            field: 'title',
                            render: rowData => <Link href={rowData.url} target="_blank" color="inherit">{rowData.title}</Link>,
                            cellStyle:
                            {
                                width: '40%',
                            },
                            headerStyle:
                            {
                                textAlign: 'center'
                            },
                            editComponent: props => (
                                <TextField
                                    defaultValue={props.value}
                                    fullWidth
                                    onChange={e => {
                                        props.onChange(e.target.value)
                                    }} />
                            )
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
                            title: 'Category',
                            field: 'category.name',
                            render: rowData => rowData.category && rowData.category.name,
                            editComponent: props => (
                                <Select
                                    value={props.value}
                                    onChange={e => {
                                        props.onChange(e.target.value);
                                    }}
                                >
                                    <MenuItem value={null}>None</MenuItem>
                                    {this.state.categoryNames.map(categoryName =>
                                        <MenuItem value={categoryName}>{categoryName}</MenuItem>
                                    )}
                                </Select>
                            )
                        },
                        {
                            title: 'Blog_Stream',
                            field: 'blog_stream',
                            editable: 'never'
                        },
                        {
                            title: 'Approvers',
                            field: 'approver_names',
                            render: rowData => rowData.approver_names,
                            editable: 'never'
                        },
                        {
                            title: 'Approvals_Needed',
                            field: 'user.role',
                            cellStyle: {
                                textAlign: 'center'
                            },
                            render: rowData => rowData.user.role === 'ADMIN' ?
                                (rowData.approver_ids ?
                                    ((this.state.adminThr - rowData.approver_ids.split(",").length) > 0 ?
                                        this.state.adminThr - rowData.approver_ids.split(",").length : 1) :
                                    this.state.adminThr) :
                                (rowData.approver_ids ?
                                    ((this.state.userThr - rowData.approver_ids.split(",").length) > 0 ?
                                        this.state.userThr - rowData.approver_ids.split(",").length : 1) :
                                    this.state.userThr),
                            editable: 'never'
                        },
                    ]}
                    data={this.state.posts}
                    isLoading={!this.state.isLoaded}
                    editable={{
                        onRowUpdate:
                            this.props.userRole !== 'ADMIN' ? null :
                                (newData, oldData) =>
                                    new Promise(resolve => {
                                        setTimeout(() => {
                                            const url = new URL(`${server}/post/` + newData.id);;
                                            fetch(url, {
                                                method: 'PATCH',
                                                headers: {
                                                    'Content-Type': 'application/json',
                                                },
                                                credentials: 'include',
                                                body: JSON.stringify({
                                                    title: newData.title,
                                                    url: newData.url,
                                                    companyId: newData.company ?
                                                        (newData.company.name && this.state.companies.find(c => c.name === newData.company.name).id)
                                                        : null,
                                                    categoryId: newData.category ?
                                                        (newData.category.name && this.state.categories.find(c => c.name === newData.category.name).id)
                                                        : null,
                                                }),
                                            }).then(errorUtil.handleErrors).then((data) => {
                                                if (oldData) {
                                                    this.setState(prevState => {
                                                        const posts = [...prevState.posts];
                                                        posts[posts.indexOf(oldData)] = newData;
                                                        return { ...prevState, posts };
                                                    });
                                                }
                                                resolve();
                                            }).catch((error) => {
                                                alert(error);
                                                window.location.reload(false);
                                            });
                                        }, 600);
                                    }),
                        onRowDelete:
                            this.props.userRole !== 'ADMIN' ? null :
                                (oldData) =>
                                    new Promise(resolve => {
                                        setTimeout(() => {
                                            const url = new URL(`${server}/post/` + oldData.id);
                                            fetch(url, {
                                                method: 'DELETE',
                                                headers: {
                                                    'Content-Type': 'application/json',
                                                },
                                                credentials: 'include',
                                            }).then(errorUtil.handleErrors).then((data) => {
                                                this.setState(prevState => {
                                                    const posts = [...prevState.posts];
                                                    posts.splice(posts.indexOf(oldData), 1);
                                                    return { ...prevState, posts };
                                                });
                                                resolve();
                                            }).catch((error) => {
                                                alert(error);
                                                window.location.reload(false);
                                            });
                                        }, 600);
                                    }),
                    }}
                    localization={{ body: { editRow: { deleteText: 'Are you sure you want to delete this unpublished content?' } } }}
                    options={{
                        actionsColumnIndex: -1,
                        pageSize: 10,
                        pageSizeOptions: [10, 20, 30, 40, 50],
                        color: "FFF",
                        headerStyle: {
                            backgroundColor: '#ECE9E9',
                            borderColor: '#070000'
                        },
                        cellStyle: {
                            padding: 20
                        },
                    }}
                    actions={[
                        rowData => ({
                            tooltip: "Approve this Post",
                            icon: TableIcons.Check,
                            onClick: oldData =>
                                new Promise(resolve => {
                                    setTimeout(() => {
                                        const url = new URL(`${server}/post/approve`);;
                                        fetch(url, {
                                            method: 'POST',
                                            headers: {
                                                'Content-Type': 'application/json',
                                            },
                                            credentials: 'include',
                                            body: JSON.stringify({
                                                postId: rowData.id,
                                                approverId: this.props.userId
                                            }),
                                        }).then(errorUtil.handleErrors).then((data) => {
                                            resolve();
                                            window.location.reload(0);
                                        }).catch((error) => {
                                            alert(error);
                                            resolve();
                                        });
                                    }, 600);
                                }),
                            disabled: rowData ? rowData.approver_ids ? rowData.approver_ids.split(",").some((e) => e.trim() === this.props.userId.toString()) : false : false,
                        })
                    ]}
                />
            </div>
        );
    }
}

export default UnpublishedPosts;