const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();

require('dotenv').config();

const db = require('./models');
const routes = require('./routes');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(session({
    secret: 'i like waffles',
    resave: false,
    saveUninitialized: false
}));

app.use((req, res, next) => {
    console.log(req.session.user);
    next();
});

app.use('/api/auth', routes.auth);
app.use('/api/users', routes.users);

app.listen(3001, () => {
    console.log('express listening from port 3001');
});
