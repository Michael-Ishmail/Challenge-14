const path = require('path')
const express = require('express')
const routes = require('./controllers')
const sequelize = require('./config/connection')
const helpers = require('./utils/helpers')
const exphbs = require('express-handlebars')

const session = require('express-session')
const sequelizeStore = require('connect-session-sequelize')(session.Store)

//const sess = {
//    secret: process.env.DB_SECRET,
//    cookie: {},
//    resave: false,
//    saveUninitialized: true,
//    store: new sequelizeStore({
//        db: sequelize,
//        checkExpirationInterval: 1000 * 60 * 10,
//        expiration: 1000 * 60 * 10
//    })
//}

const app = express()
const PORT = process.env.PORT || 3001

const hbs = exphbs.create({})

app.engine('handlebars', hbs.engine)
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'handlebars')

app.use(session({
    secret: process.env.DB_SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new sequelizeStore({
        db: sequelize,
        checkExpirationInterval: 1000 * 60 * 10,
        expiration: 1000 * 60 * 10
})
}))

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(routes)



app.listen(PORT, () => {
    console.log('Listening on port')
})
