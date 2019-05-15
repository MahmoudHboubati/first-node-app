const config = require('config');
const mongoose = require("mongoose");
const Joi = require("joi");
const genres = require("./routes/genres");
const home = require("./routes/home");
const express = require("express");
const app = express();
const helmet = require('helmet');
const morgan = require('morgan');
const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');

mongoose
  .connect("mongodb://localhost/playground", { useNewUrlParser: true })
  .then(() => dbDebugger("connected to mongo db"))
  .catch(err => {
    dbDebugger(`cann't connect to mongo`);
  });

if (app.get('env') === 'development') {
  app.use(morgan('tiny')); //log request/response info only on dev
  startupDebugger('Morgan enabled...');
}

app.set('view engine', 'pug');
app.set('views', './views'); // default

app.use(helmet());
app.use(express.json());
app.use("/", home);
app.use("/api/genres", genres);

console.log('Application Name:' + config.get('name'));
console.log('Mail Server:' + config.get('mail.host'));
console.log('Mail Password:' + config.get('mail.password'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listining on port ${port}...`));
