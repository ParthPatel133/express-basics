const express = require('express');
const app = express();
const port = 80;

app.get("/", (req, res) => {
    res.status(200).send('this is homepage')
})

app.post("/about", (req, res) => {
    res.status(200).send('this is about post request')
})

app.listen(port, () => {
    console.log(`app started on port ${port}`)
})