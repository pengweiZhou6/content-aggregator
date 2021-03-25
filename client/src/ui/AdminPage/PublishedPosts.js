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

const postStyle = {
    marginTop: '4.5%',
    marginLeft: '5%',
    marginRight: '5%'
}


class PublishedPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            companies: [],
            companyNames: [],
            categories: [],
            categoryNames: [],
            isLoaded: false,
        };
    }

    async componentDidMount() {
        try {
            const postParams = { isPublished: true, isStream: false };
            const resultPosts = await postService.fetchPosts(postParams);
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

            const resultCompany = await errorUtil.handleErrors(responseCompany).json();
            const resultCategory = await errorUtil.handleErrors(responseCategory).json();

            this.setState({
                isLoaded: true,
                posts: resultPosts.posts,
                companies: resultCompany.companies,
                companyNames: resultCompany.companies.map((company) => { return company.name }),
                categories: resultCategory.categories,
                categoryNames: resultCategory.categories.map((category) => { return category.name }),
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
                    title="Posts"
                    components={{
                        Container: props => <Paper {...props} elevation={0} />
                    }}
                    columns={[
                        {
                            title: 'Title',
                            field: 'title',
                            render: rowData =>
                                <div>
                                    <Link target="_blank" href={rowData.url} color="inherit">
                                        {rowData.title}
                                    </Link>
                                </div>,
                            cellStyle:
                            {
                                width: '40%',
                            },
                            headerStyle:
                            {
                                textAlign: 'center',
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
                                        <MenuItem key={companyName} value={companyName}>{companyName}</MenuItem>
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
                            title: 'Date_Posted',
                            field: 'last_updated',
                            render: rowData => new Date(rowData.last_updated).toLocaleDateString(),
                            editable: "never"
                        },
                    ]}
                    data={this.state.posts}
                    isLoading={!this.state.isLoaded}
                    editable={{
                        onRowUpdate: (newData, oldData) =>
                            new Promise(resolve => {
                                setTimeout(() => {
                                    resolve();
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
                                            companyId: newData.company && newData.company.name ?
                                                this.state.companies.find(c => c.name === newData.company.name).id
                                                : null,
                                            categoryId: newData.category && newData.category.name ?
                                                this.state.categories.find(c => c.name === newData.category.name).id
                                                : null,
                                        }),
                                    }).then(errorUtil.handleErrors)
                                        .then((data) => {
                                        }).catch((error) => {
                                            alert(error);
                                            window.location.reload(false);
                                        });
                                    if (oldData) {
                                        this.setState(prevState => {
                                            const posts = [...prevState.posts];
                                            posts[posts.indexOf(oldData)] = newData;
                                            return { ...prevState, posts };
                                        });
                                    }
                                }, 600);
                            }),

                        onRowDelete: oldData =>
                            new Promise(resolve => {
                                setTimeout(() => {
                                    resolve();
                                    const url = new URL(`${server}/post/` + oldData.id);
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
                                        const posts = [...prevState.posts];
                                        posts.splice(posts.indexOf(oldData), 1);
                                        return { ...prevState, posts };
                                    });
                                }, 600);
                            }),
                    }}
                    localization={{ body: { editRow: { deleteText: 'Are you sure you want to delete this Post?' } } }}
                    options={{
                        actionsColumnIndex: -1,
                        pageSize: 20,
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

                    ]}
                />
            </div>
        );
    }
}

export default PublishedPosts;