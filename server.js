const express = require('express');
const app = express();

app.use('/htmltest', express.static('public'));
app.get('/htmltest', function (req, res) {
    res.send(window.console.log('works ?'))
})

app.get('/bad', function (req, res) {
    res.send({
        errorMessage: 'Wrong path - go home'
    })
})

app.listen(7998)