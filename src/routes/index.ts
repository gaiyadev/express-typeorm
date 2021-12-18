import * as express from "express";
import  { UserService } from '../services/user.service'
const router = express.Router();

/* GET home page. */
const route = new UserService();
router.post("/",route.signIn);


module.exports = router;