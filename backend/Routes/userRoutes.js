import express  from "express";
import {registerUser,authUser,allUsers} from "../controllers/usercontroller.js"
import protect from "../middleware/authmiddleware.js";

const router = express.Router();

router.route('/').post(registerUser)
// .get(allUsers) ;
router.post('/login', authUser)
router.route("/").get(protect, allUsers)
// router.route("/").get(allUsers)
export default router;