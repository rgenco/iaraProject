import { EntryUpload } from "../types/generalTypes";
import entryService from "../services/entry.service";
import { Request, Response } from "express";

const createEntries = async (req: Request, res: Response) => {
  try {
    const entries = req.body as EntryUpload[];
    await entryService.createEntries(entries);
    res.status(200).send("Se ingresaron los datos correctamente.");
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

const author = {
  createEntries,
};

export default author;
