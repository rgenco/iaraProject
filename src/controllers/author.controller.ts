import { Author } from "../types/generalTypes";
import authorService from "../services/author.service";
import { Request, Response } from "express";

const getAuthors = async (req: Request, res: Response) => {
  try {
    const authors = await authorService.getAuthors();
    return res.status(200).json(authors);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

const getAuthor = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);

  try {
    const author = await authorService.getAuthor(id);
    if (author) {
      return res.status(200).json(author);
    }
    return res.status(404).json({ error: "Author no se pudo encontrar" });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

const createAuthor = async (req: Request, res: Response) => {
  try {
    const author = req.body as Author;
    const newAuthor = await authorService.createAuthor(author);
    return res.status(201).json(newAuthor);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

const updateAuthor = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params["id"]);
    await authorService.updateAuthor(req.body, id);
    res.send("Se actualizó el author correctamente.");
  } catch (error: any) {
    return res.status(500).json({
      message: "Error al actualizar el author.",
      error: error.message,
    });
  }
};

const deleteAuthor = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params["id"]);
    await authorService.deleteAuthor(id);
    res.send("Se actualizó el usuario correctamente.");
  } catch (error: any) {
    return res.status(500).json({
      message: "Error al actualizar el author.",
      error: error.message,
    });
  }
};

const author = {
  getAuthors,
  getAuthor,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};

export default author;
