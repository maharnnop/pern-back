//imported express library
const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require("body-parser").json()

const cors = require('cors')

const app = express();//returns an object
const routes = require('./routes');


//middleware- every request goes through it
app.use(cors())
app.use(bodyParser)


app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use(methodOverride('_method'));


app.use('/', routes.cashbooks);


//app will run on port
// if have .env file parameter PORT
// app.listen(process.env.PORT, () => {
//     console.log(`Listening on port ${process.env.PORT}`);
// })

app.listen(3002, () => {
    console.log(`Listening on port 3002`);
})

