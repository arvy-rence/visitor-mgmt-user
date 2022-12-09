import axios from 'axios';

export default axios.create({
    baseURL: 'https://vcl-pass.herokuapp.com/api/'
});