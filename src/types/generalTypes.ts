export type Author = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  firstName: string;
  lastName: string;
  books?: Book[];
};

export type Book = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  isFiction: boolean;
  datePublished: Date;
  authorId: number;
};
