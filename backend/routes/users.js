import express from "express";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
import { updateUser, deleteUser, getUser, getAllUsers } from "../controllers/user.js";

const router = express.Router();

router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);
router.get('/user/:id', verifyUser, getUser);
router.get('/getall', verifyAdmin, getAllUsers);

export default router;