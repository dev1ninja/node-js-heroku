const express = require("express");
const cors = require('cors');
const path = require('path');
const app = express();
var public = path.join(__dirname, 'style');
app.use(cors()); 
app.use('/', express.static(public));

const port = 4200;

app.listen(port, () => {
    console.log(`Express http server listening on: ${port}`);
})

app.get('/', (req, res) => {
    res.send(`Express http server listening on: ${port}`);
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, './view/aboutMe.html'));
})

app.get('/hobbies', (req, res) => {
    res.sendFile(path.join(__dirname, './view/myHobbies.html'));
})

app.get('*', function(req, res){
    res.status(404).sendFile(path.join(__dirname, './view/pageNotFound.html'))
});