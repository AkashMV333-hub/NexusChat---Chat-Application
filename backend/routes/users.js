import express from "express";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
import { updateUser, deleteUser, getUser, getAllUsers } from "../controllers/user.js";

const router = express.Router();

router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);
router.get('/user/:id', getUser);
router.get('/getall', getAllUsers);

export default router;
