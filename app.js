const express =  require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const app = express();
const baseRoute = require("./routes/base");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(logger("dev"));

app.use("/base", baseRoute);

app.listen(process.env.APP_PORT, () => {
  console.log('Node app is running on port', process.env.APP_PORT); // eslint-disable-line
});

module.exports = app;