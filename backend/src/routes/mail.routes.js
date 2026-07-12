import { Router } from "express";
import { contact } from "../controller/mail.controller.js";
const router = Router();

router.post("/contact", contact);

import { upload } from '../middleware/multer.middleware.js';
import { RequestAQuote } from "../controller/requestQuote.controller.js";

router.post(
  "/request-quote",
  upload.single("attachment"),
  RequestAQuote
);

export default router;
