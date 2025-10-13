import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:5010"
})

export default api