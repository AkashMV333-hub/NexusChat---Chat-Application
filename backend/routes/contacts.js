import express from  "express";
import { getcontacts } from "../controllers/contact.js";
const router = express.Router();

router.post('/contacts', getcontacts);

export default router;