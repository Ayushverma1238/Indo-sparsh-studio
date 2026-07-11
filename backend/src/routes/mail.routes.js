import { Router } from "express";
import { contact } from "../controller/mail.controller.js";
const router = Router();

router.post("/contact", contact);

export default router;
