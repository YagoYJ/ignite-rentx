import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { Request, Response } from "express";
import { container, inject, injectable } from "tsyringe";
import { ListRentalsByUserUseCase } from "./ListRentalsByUserUseCase";

@injectable()
class ListRentalsByUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.user;

    const listRentalsByUserUseCase = container.resolve(
      ListRentalsByUserUseCase
    );

    const rentals = listRentalsByUserUseCase.execute(id);

    return res.json({ rentals });
  }
}

export { ListRentalsByUserController };
