const express = require ('express')
const app= express();
const cors =require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const frameworks = require('./data/frameworks.json')

app.get('/', (req,res) => {
    res.send('news api running ok');
});

app.get('/frameworks',(req, res)=>[
    res.send(frameworks)
]);

app.listen(port, ()=>{
    console.log('site',port);
})