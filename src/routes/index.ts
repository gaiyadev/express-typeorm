import * as express from "express";
import  { UserService } from '../services/user.service'
const router = express.Router();

/* GET home page. */

const obj = new UserService();
router.get("/", obj.signIn);


module.exports = router;