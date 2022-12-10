import axios from 'axios';

export default axios.create({
    // baseURL: 'https://vcl-pass.herokuapp.com/api/'
    baseURL: 'http://localhost:5082/api/'
});