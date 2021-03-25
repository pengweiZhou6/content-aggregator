import server from '../config/server';

async function getCurrentSessionInfo() {
    const url = new URL(`${server}/user/current/session`);

    const response = await fetch(url, {
        method: 'GET',
        credentials: 'include'
    });
    if (!response.ok) {
        return null;
    }

    return response.json();
}

export const userService = {
    getCurrentSessionInfo
}