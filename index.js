const express = require('express')
const app = express()
const port = 5000
const morgan = require('morgan');
app.use(morgan('combined'));
app.get('/', (req, res) => res.send('Hello World!' + require('os').hostname()));
app.get('/status', function (req, res) {
    res.send('ok a live');
});

app.get('/readystatus', function (req, res) {
    res.send('ok ready check');
});

function logErrors(err, req, res, next) {
    console.log("errror", err);
    
    next(err)
}
function clientErrorHandler(err, req, res, next) {
    console.log("client errror", err);
    if (req.xhr) {
        res.status(500).send({ error: 'Something failed!' })
    } else {
        next(err)
    }

    
}

function errorHandler (err, req, res, next) {
    console.error("errorhandler", err)
    res.status(500)
    res.render('error', { error: err })
  }


app.use(logErrors)
app.use(clientErrorHandler)
app.use(errorHandler)



app.listen(port, () => console.log(`Example app listening on port ${port}!`));