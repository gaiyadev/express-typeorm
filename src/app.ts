import * as express from "express";
import {Request, Response} from "express";

// create and setup express app
const app = express();
app.use(express.json());

// register routes

app.get("/", function(req: Request, res: Response) {
    res.json({message: 'welcome to docker crash course'})
});


// start express server
app.listen(3000);