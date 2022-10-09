import axios from 'axios';

const baseURL = 'http://192.168.100.152:5000/server';

export const baseRequest = axios.create({ baseURL });
