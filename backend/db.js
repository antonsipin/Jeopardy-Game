require('dotenv').config();
const mongoose = require('mongoose');

const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
  autoIndex: true,
  poolSize: 10,
  bufferMaxEntries: 0,
};

const { DB_USER, DB_NAME, DB_PASSWORD } = process.env;

const dbConnectionURL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.wjoem.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

function dbConnect() {
  mongoose.connect(dbConnectionURL, options, (err) => {
    if (err) return console.log(err);
    return console.log(`Success connected to ${DB_NAME}`);
  });
}

module.exports = dbConnect;
