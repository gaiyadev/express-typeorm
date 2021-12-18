import * as express from "express";
import {Request, Response} from "express";
import  { signIn } from '../controllers/user.controller'
const router = express.Router();

/* GET home page. */
router.get("/", signIn);


module.exports = router;