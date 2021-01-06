require('dotenv').config();
const express = require('express');
const session = require('express-session');
const sessionFileStore = require('session-file-store');
const path = require('path');
const dbConnect = require('./db');
const gameRouter = require('./routes/gameRouter');
const mainRouter = require('./routes/main')
const createTable = require('./seed');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT

dbConnect();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const FileStore = sessionFileStore(session);
app.use(
  session({
    name: app.get('session cookie name'),
    secret: process.env.SESSION_SECRET,
    store: new FileStore({
      secret: process.env.SESSION_SECRET,
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

app.use((req, res, next) => {
  if (req.session.user) {
    res.locals.user = req.session.user.login;
  }
  next();
});

app.use(express.static(path.resolve('../frontend/build')))
app.use('/game', gameRouter);
app.use('*', mainRouter);

app.listen(PORT, () => {
  console.log('Server has been started on port: ', PORT);
});
