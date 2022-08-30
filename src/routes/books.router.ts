import express from "express";

import BookController from "../controllers/books.controller"
import pagination from "../middlewares/pagination.middleware";
const bookController = new BookController();

const router = express.Router();

router.get('/',  pagination, bookController.getAllBooks.bind(bookController));
router.get('/:id', bookController.getBook.bind(bookController));
router.post('/', bookController.createBook.bind(bookController));
router.patch('/:id', bookController.updateBook.bind(bookController));
router.delete('/:id', bookController.deleteBook.bind(bookController));

export default router;