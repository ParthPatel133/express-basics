const express = require('express');
const path = require('path');
const app = express();
const port = 80;

//EXPRESS SPECIFIC CONFIG
app.use('/static', express.static('static')) //static is folder name (for serving static files)

//PUG SPECIFIC CONFIG
app.set('view engine', 'pug') //set the template engine as pug
app.set('views', path.join(__dirname, 'views')) //set the views directory

//ENDPOINTS
app.get('/', (req, res) => {
    const head = 'Heading of pug';
    const params = { 'title': 'title of pug', 'heading': head }
    res.status(200).render('index.pug', params)
})

//START THE SERVER
app.listen(port, () => {
    console.log(`app started on port ${port}`)
})