import axios from 'axios';

const executeCode = (code) =>{
    return axios.post('http://localhost:5000/execute', { code });
}


export default {executeCode}
