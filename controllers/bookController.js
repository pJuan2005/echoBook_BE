// server/controllers/bookController.js
import Book from "../models/bookModel.js";

// GET /api/books
export const getBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: "Lỗi server khi lấy danh sách sách" });
  }
};

// POST /api/books
export const createBook = async (req, res) => {
  try {
    const { title, author, description, coverImage, rating } = req.body;

    const newBook = await Book.create({
      title,
      author,
      description,
      coverImage,
      rating,
    });

    res.status(201).json(newBook);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Tạo sách thất bại", error: error.message });
  }
};
