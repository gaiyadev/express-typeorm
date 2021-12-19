import * as express from "express";
const bodyParser = require('body-parser')
require('./connection/typeOrm.config')

const indexRouter = require("./app.controller");
const userRouter = require("./user/user.controller");

// create and setup express app
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));


// register routes
const version = 'v1';
app.use("/", indexRouter);
app.use(`/api/${version}/users`, userRouter);

// start express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.info(`Express api listening on port ${PORT}`);
});
