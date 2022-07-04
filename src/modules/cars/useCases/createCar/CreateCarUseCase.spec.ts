import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepository: CarsRepositoryInMemory;

describe("Create Card", () => {
  beforeEach(() => {
    createCarUseCase = new CreateCarUseCase(carsRepository);
  });

  it("Should be able to create a car", async () => {
    let data = {
      name: "Name test",
      description: "Description test",
      daily_rate: 20,
      liscense_plate: "123123",
      fine_amount: 100,
      brand: "Brand test",
      category_id: "uuid",
    };

    await createCarUseCase.execute(data);
  });
});
