import authorController from "../controllers/author.controller";
import { verifyToken } from "../middlewares/auth.middleware";
import { Router } from "express";

const router = Router();

router.get("", authorController.getAuthors);
router.get("/:id", authorController.getAuthor);
router.post("/", authorController.createAuthor);
router.put("/:id", authorController.updateAuthor);
router.delete("/:id", authorController.deleteAuthor);

export default router;
