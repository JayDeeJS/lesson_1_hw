import axios from "axios";

export const $api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 2000,
    headers: {'X-Custom-Header': 'foobar'}
})