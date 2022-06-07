import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCategoriesUseCase } from "../listCategories/ListCategoriesUseCase";

class ListCategoriesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listCategoriesController = container.resolve(ListCategoriesUseCase);
    const all = await listCategoriesController.execute();

    return res.status(201).json(all);
  }
}

export { ListCategoriesController };
