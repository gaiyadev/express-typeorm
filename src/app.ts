import * as express from "express";
const bodyParser = require('body-parser')
require('./connection/typeOrm')

const indexRouter = require("./routes/index");
// create and setup express app
const app = express();
app.use(express.json());
 app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));


// register routes
app.use("/", indexRouter);


// start express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.info(`Express api listening on port ${PORT}`);

});
