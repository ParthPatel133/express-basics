const express = require('express');
const path = require('path');
const app = express();
const port = 80;

//for serving static files
app.use('/static', express.static('static')) //here static is folder name

//set the template engine as pug
app.set('view engine', 'pug')

//set the views directory
app.set('views', path.join(__dirname, 'views'))

//pug demo end point
app.get('/demo', (req, res) => {
    res.status(200).render('demo', { title: 'pug demo', message: 'sample text for using pug' })
})

app.get("/", (req, res) => {
    res.status(200).send('this is homepage')
})


app.post("/about", (req, res) => {
    res.status(200).send('this is about post request')
})

app.listen(port, () => {
    console.log(`app started on port ${port}`)
})