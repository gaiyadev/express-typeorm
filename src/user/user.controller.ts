import * as express from "express";
import  { UserService } from './user.service'
const router = express.Router();

/* GET home page. */
const route = new UserService();
router.post("/", route.signIn);
router.get("/", route.fetchAll);
router.get("/:id", route.fetchOne);
router.delete("/:id", route.removeOne);
router.put("/:id", route.updateOne);


module.exports = router;