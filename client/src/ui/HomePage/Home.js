import React from 'react';
import SearchBar from './SearchBar';
import Content from './Content';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination'
import SubmitButton from './SubmitButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import { postService } from '../../services';
import server from '../../config/server';
import vancouverBackground from '../../vancouver.jpg';
import { IconButton } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import errorUtil from "../../ErrorUtil";
import LightTooltip from "../components/LightTooltip";
import Typography from "@material-ui/core/Typography";


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
    getContentAnchorEl: null,
    anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center',
    },
    transformOrigin: {
        vertical: 'top',
        horizontal: 'center',
    }
};

const useStyles = theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
    noLabel: {
        marginTop: theme.spacing(3),
    },
    noPosts: {
        marginTop: '100px',
        textAlign: 'center'
    }
});

const paginationStyle = {
    marginTop: "2%",
    marginBottom: "2%",
    float: "right",
    alignItems: 'center',
    color: "#3D8AF7",
}
export default withStyles(useStyles)(
    class Home extends React.Component {
        searchDebounceTimer;
        searchString;

        constructor(props) {
            super(props);
            this.state = {
                error: null,
                isLoaded: false,
                posts: [],
                page: 0,
                pageSize: 10,
                numPages: 0,
                searchString: null,
                categories: [],
                companies: [],
                selectedCategories: [],
                selectedCompanies: []
            };
        }

        getCategories = async () => {
            try {
                const url = new URL(`${server}/category`);

                const response = await fetch(url, {
                    method: 'GET',
                    credentials: 'include'
                });

                const result = await errorUtil.handleErrors(response).json();
                this.setState({ categories: result.categories });
            } catch (error) {
                alert(error);
            }
        };

        getCompanies = async () => {
            try {
                const url = new URL(`${server}/company`);

                const response = await fetch(url, {
                    method: 'GET',
                    credentials: 'include'
                });

                const result = await errorUtil.handleErrors(response).json();
                this.setState({ companies: result.companies });
            } catch (error) {
                alert(error);
            }
        };

        componentDidMount() {
            this.fetchCurrentPage(0);
            this.getCategories();
            this.getCompanies();
        }

        performSearch = (event) => {
            clearTimeout(this.searchDebounceTimer);
            const searchString = event.target.value;
            this.searchDebounceTimer = setTimeout(() => {
                this.searchString = searchString;
                this.fetchCurrentPage(0);
            }, 500);
        }

        handleCategoryFilterChange = (event) => {
            this.setState({ selectedCategories: event.target.value });
            this.searchDebounceTimer = setTimeout(() => {
                this.fetchCurrentPage(0);
            }, 500);
        }

        handleCompanyFilterChange = (event) => {
            this.setState({ selectedCompanies: event.target.value });
            this.searchDebounceTimer = setTimeout(() => {
                this.fetchCurrentPage(0);
            }, 500);
        }

        onPageChange = (event, value) => {
            this.fetchCurrentPage(value - 1);
            window.scrollTo(0, 0);
        }

        fetchCurrentPage = async (page) => {
            try {
                const params = { page: page, pageSize: this.state.pageSize, isPublished: true, isStream: false };
                if (this.searchString) {
                    params.title = this.searchString;
                }
                if (this.state.selectedCategories.length !== 0) {
                    params.categoryId = this.state.selectedCategories;
                }

                if (this.state.selectedCompanies.length !== 0) {
                    params.companyId = this.state.selectedCompanies;
                }

                const result = await postService.fetchPosts(params);

                this.setState({
                    isLoaded: true,
                    posts: result.posts,
                    numPages: Math.ceil(result.count / this.state.pageSize),
                    page
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
                <div className="Home">
                    <div className="homeImage">
                        <img src={vancouverBackground} width="100%" height="300" crop="fill" alt="" />
                        <h2 className="mui-fixed"> Latest News </h2>
                    </div>
                    <div className="homeContent">
                        <Grid container alignItems="center" spacing={3}>
                            <Grid item xs={10}>
                                <SearchBar onChange={this.performSearch} />
                            </Grid>
                            <Grid item xs={2}>
                                <LightTooltip title="RSS">
                                    <IconButton className="rssButton" aria-label="rssfeed" href={`${server}/feed`}>
                                        <RssFeedIcon />
                                    </IconButton>
                                </LightTooltip>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={2}>
                                <FormControl fullWidth margin="normal" >
                                    <InputLabel id="demo-mutiple-chip-label">Filter by Category</InputLabel>
                                    <Select
                                        labelId="demo-mutiple-chip-label"
                                        id="demo-mutiple-chip"
                                        multiple
                                        value={this.state.selectedCategories}
                                        onChange={this.handleCategoryFilterChange}
                                        input={<Input id="select-multiple-chip" />}
                                        renderValue={selected => (
                                            <div className={classes.chips}>
                                                {selected.map(value => (
                                                    <Chip key={value} size="small" label={this.state.categories.find(o => o.id === value).name} className={classes.chip} />
                                                ))}
                                            </div>
                                        )}
                                        MenuProps={MenuProps}
                                    >
                                        {this.state.categories.map(category => (
                                            <MenuItem key={category.id} value={category.id}>
                                                {category.name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={2}>
                                <FormControl fullWidth margin="normal" >
                                    <InputLabel id="demo-mutiple-chip-label">Filter by Company</InputLabel>
                                    <Select
                                        labelId="demo-mutiple-chip-label"
                                        id="demo-mutiple-chip"
                                        multiple
                                        value={this.state.selectedCompanies}
                                        onChange={this.handleCompanyFilterChange}
                                        input={<Input id="select-multiple-chip" />}
                                        renderValue={selected => (
                                            <div className={classes.chips}>
                                                {selected.map(value => (
                                                    <Chip key={value} size="small" label={this.state.companies.find(o => o.id === value).name} className={classes.chip} />
                                                ))}
                                            </div>
                                        )}
                                        MenuProps={MenuProps}
                                    >
                                        {this.state.companies.map(company => (
                                            <MenuItem key={company.id} value={company.id}>
                                                {company.name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={2}>
                                <SubmitButton userId={this.props.userId} />
                            </Grid>
                        </Grid>
                        <Grid container className="homePosts">
                            <Grid item xs={12}>
                                {this.state.isLoaded ?
                                    this.state.numPages === 0 ? <Typography className={classes.noPosts}> No posts found </Typography> : <Content posts={this.state.posts} />
                                    : null}
                                {this.state.isLoaded && this.state.numPages > 0 ? <Pagination page={this.state.page + 1} onChange={this.onPageChange}
                                    count={this.state.numPages} color="primary" style={paginationStyle} size="large" shape="rounded" /> : null}
                            </Grid>
                        </Grid>
                    </div>
                </div>
            );
        }
    }
)