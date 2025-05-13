import { Author } from "../types/generalTypes";
import prisma from "../utils/prisma.server";

const getAuthors = async (): Promise<Author[]> => {
  return prisma.author.findMany({
    include: {
      Book: true,
    },
  });
};

const getAuthor = async (id: number): Promise<Author | null> => {
  return prisma.author.findUnique({
    where: {
      id: id,
    },
  });
};

const createAuthor = async (author: Omit<Author, "id">): Promise<Author> => {
  const { firstName, lastName } = author;
  return prisma.author.create({
    data: {
      firstName,
      lastName,
    },
  });
};

const updateAuthor = async (
  author: Omit<Author, "id">,
  id: number,
): Promise<Author> => {
  const { firstName, lastName } = author;
  return prisma.author.update({
    where: {
      id: id,
    },
    data: {
      firstName,
      lastName,
    },
  });
};

const deleteAuthor = async (id: number): Promise<void> => {
  await prisma.author.delete({
    where: {
      id,
    },
  });
};

export default {
  getAuthors,
  getAuthor,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
