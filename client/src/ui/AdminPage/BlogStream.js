import React from 'react';
import MaterialTable from 'material-table';
import TableIcons from './TableIcons';
import server from '../../config/server';
import errorUtil from '../../ErrorUtil';
import { postService } from '../../services';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

const blogStyle = {
    marginTop: '4.5%',
    marginLeft: '5%',
    marginRight: '5%'
}

class BlogStream extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: [],
            companies: [],
            companyNames: [],
            categories: [],
            categoryNames: [],
            isLoaded: false,
        };
    }

    async componentDidMount() {
        try {
            const postParams = { isPublished: true, isStream: true};
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
                blogs: resultPosts.posts,
                companies: resultCompany.companies,
                companyNames: resultCompany.companies.map((company) => {return company.name}),
                categories: resultCategory.categories,
                categoryNames: resultCategory.categories.map((category) => {return category.name}),
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
            <div style={blogStyle}>
                <MaterialTable
                    icons={TableIcons}
                    title="Blogs"
                    components={{
                        Container: props => <Paper {...props} elevation={0} />
                    }}
                    columns={[
                        { 
                            title: 'Blog Stream', 
                            field: 'title',
                            render: rowData => <Link href={rowData.url} target="_blank" color="inherit">{rowData.title}</Link>,
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
                    ]}
                    data={this.state.blogs}
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
                                            companyId: newData.company ? 
                                                (newData.company.name && this.state.companies.find(c => c.name===newData.company.name).id)
                                                : null,
                                            categoryId: newData.category ?
                                                (newData.category.name && this.state.categories.find(c => c.name===newData.category.name).id) 
                                                : null,
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
                                            const blogs = [...prevState.blogs];
                                            blogs[blogs.indexOf(oldData)] = newData;
                                            return { ...prevState, blogs };
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
                                        const blogs = [...prevState.blogs];
                                        blogs.splice(blogs.indexOf(oldData), 1);
                                        return { ...prevState, blogs };
                                    });
                                }, 600);
                            }),
                    }}
                    localization={{ body: { editRow: { deleteText: 'Are you sure you want to delete this Blog?' } } }}
                    options={{
                        actionsColumnIndex: -1,
                        pageSize: 10,
                        pageSizeOptions: [5,10,20,30,40,50],
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

export default BlogStream;