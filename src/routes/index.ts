import * as express from "express";
import {Request, Response} from "express";
const router = express.Router();

/* GET home page. */
router.get("/", function(req: Request, res: Response) {
    res.json({message: 'welcome to docker crash course'})
});


module.exports = router;