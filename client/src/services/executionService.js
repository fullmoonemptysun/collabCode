import axios from 'axios';

const executeCode = (code) =>{
    return axios.post('/execute', { code });
}


export default {executeCode}
