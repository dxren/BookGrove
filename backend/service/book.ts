import { Book, Prisma } from "@prisma/client";
import { prismaClient } from "../prismaClient";

export interface IBookService {
  createBook(userId: string, title: string): Promise<Book>;
  getBookById(bookId: string): Promise<Book | null>;
  getAllBooksbByUserId(userId: string): Promise<Book[]>;
  updateBook(id: string, title: string): Promise<Book>;
  deleteBook(id: string): Promise<void>;
}

export const BookService = () => ({
  createBook: async (userId: string, title: string) => {
    const result = await prismaClient.book.create({
      data: {
        userId,
        title,
      },
    });
    return result;
  },
  getBookById: async (bookId: string) => {
    const book = await prismaClient.book.findUnique({
      where: {
        id: bookId,
      },
    });
    return book;
  },
  getAllBooksbByUserId: async (userId: string) => {
    const books = await prismaClient.book.findMany({
      where: {
        userId: userId,
      },
    });
    return books;
  },
  updateBook: async (id: string, title: string) => {
    const updatedBook = await prismaClient.book.update({
      where: { id: id },
      data: { title: title },
    });
    return updatedBook;
  },
  deleteBook: async (id: string) => {
    const deletedBook = await prismaClient.book.delete({
      where: { id: id },
    });
  },
});
