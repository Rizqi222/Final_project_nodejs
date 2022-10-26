import express from "express";
import { getUsers, Register, Login, Logout  } from "../controller/UsersController.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controller/RefresToken.js"; 

// const router = express.Router();
const router = express.Router();

router.get("/users", verifyToken, getUsers);
router.post("/users",  Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);

export default router;