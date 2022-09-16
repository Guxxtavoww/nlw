import axios from 'axios';

const baseURL = 'http://localhost:5000/server';

export const baseRequest = axios.create({ baseURL });
