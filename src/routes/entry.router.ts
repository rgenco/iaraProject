import entryController from "../controllers/entry.controller";
import { verifyToken } from "../middlewares/auth.middleware";
import { Router } from "express";

const router = Router();

router.post("/", entryController.createEntries);

export default router;
