import * as express from "express";
import  { AppService } from './app.service'
const router = express.Router();

/* GET home page. */
const route = new AppService();

router.get("/", route.welcome);

module.exports = router;