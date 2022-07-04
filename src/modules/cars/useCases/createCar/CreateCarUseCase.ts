import "reflect-metadata";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { inject, injectable } from "tsyringe";
interface IRequest {
  name: string;
  description: string;
  daily_rate: number;
  liscense_plate: string;
  fine_amount: number;
  brand: string;
  category_id: string;
}

@injectable()
class CreateCarUseCase {
  constructor(
    @inject("carsRepository")
    private carsRepository: ICarsRepository
  ) {}

  async execute(data: IRequest): Promise<void> {
    await this.carsRepository.create(data);
  }
}

export { CreateCarUseCase };
