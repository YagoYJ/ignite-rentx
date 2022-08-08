import { Request, Response } from "express";
import { container } from "tsyringe";

import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
  handle(req: Request, res: Response): Response {
    const { file } = req;
    const importCategoryUseCase = container.resolve(ImportCategoryUseCase);

    if (file) {
      importCategoryUseCase.execute(file);
    } else {
      return res.status(400).json({ error: "Can not read the file" });
    }

    return res.status(201).send();
  }
}

export { ImportCategoryController };
