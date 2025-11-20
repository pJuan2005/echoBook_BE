// server/models/bookModel.js
import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, default: "Unknown" },
    description: { type: String },
    coverImage: { type: String }, // link ảnh bìa
    rating: { type: Number, default: 0 }, // đánh giá trung bình
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", bookSchema);

export default Book;
