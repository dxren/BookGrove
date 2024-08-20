export type Book = {
  id: string;
  title: string;
  createdAt: Date;
  updatedAt?: Date;
  userId: string;
  analysis?: BookAnalysis;
};

type BookAnalysis = {
  id: string;
  summary: string;
  createdAt: Date;
  bookId: string;
};

type Tag = {
  description: string;
  createdAt: Date;
};
