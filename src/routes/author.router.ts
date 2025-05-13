import author from "../controllers/author.controller";
import { verifyToken } from "../middlewares/auth.middleware";
import { Router } from "express";

const router = Router();

router.get("", author.getAuthors);
// router.get("/:id",verifyToken, author.getAuthor);
router.post("/", author.createAuthor);
// router.put("/:id", verifyToken, author.updateAuthor);
// router.delete("/:id", verifyToken, author.deleteAuthor);

export default router;
