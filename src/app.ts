import * as express from "express";

const indexRouter = require("./routes/index");
// create and setup express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// register routes
app.use("/", indexRouter);


// start express server
app.listen(3000);