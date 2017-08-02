const express =  require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const app = express();

app.set("port", (process.env.PORT || 5000));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(logger("dev"));


app.listen(app.get("port"), () => {
  console.log('Node app is running on port', app.get("port")); // eslint-disable-line
});

module.exports = app;