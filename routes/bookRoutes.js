// server/routes/bookRoutes.js
import express from "express";
import { getBooks, createBook } from "../controllers/bookController.js";

const router = express.Router();

router.get("/", getBooks); // GET /api/books
router.post("/", createBook); // POST /api/books

export default router;
