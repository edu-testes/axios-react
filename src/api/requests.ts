import axios from "axios";

const FIRST_API_URL = 'https://jsonplaceholder.typicode.com';
const SECOND_API_URL = 'https://fakerapi.it/api/v1';

export const getPosts = axios({ url: `${FIRST_API_URL}/posts`, method: 'GET', params: { ofset: 0, limit: 10 }});
