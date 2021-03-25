import server from '../config/server';

async function fetchPosts(queryParams) {
    const url = new URL(`${server}/post`);
    url.search = new URLSearchParams(queryParams).toString();

    const response = await fetch(url, {
        method: 'GET',
        credentials: 'include'
    });

    if (!response.ok) {
        console.log(response);
        return;
    }

    return response.json();
}

async function fetchFeaturedPosts() {
    const url = new URL(`${server}/post/featured`);

    const response = await fetch(url, {
        method: 'GET'
    });

    if (!response.ok) {
        console.log(response);
        return;
    }

    return response.json();
 }
 
export const postService = {
    fetchPosts,
    fetchFeaturedPosts
}