const POST = (url, data) => {

    let options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        credentials: 'include'
    };

    return fetch(url, options);
}

const GET = (url, data) => {

    let options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        credentials: 'include'
    };

    return fetch(url, options);
}
export default {POST, GET}