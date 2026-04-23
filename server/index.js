const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.static('dist'));
app.use(cors())
app.use(morgan('tiny'))


app.post('/execute', (req, res) => {
    const output = [];
    const log = console.log;
    const error = console.error;
    const warn = console.warn;
    
    const code = req.body.code;
    
    console.log = (...args) => {
        output.push(...args);
    };
    console.error = (...args) => {
        output.push(...args);
    };
    console.warn = (...args) => {
        output.push(...args);
    };
    
    eval(code);


    res.setHeader('access-control-allow-origin', '*')
    res.json({ output })

    console.log = log;
    console.error = error;
    console.warn = warn;
});




app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})
