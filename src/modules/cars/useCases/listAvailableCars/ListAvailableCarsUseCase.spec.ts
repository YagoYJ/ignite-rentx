import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
  });

  it("Should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car name test",
      description: "Car description test",
      daily_rate: 100,
      license_plate: "TEST-1234",
      fine_amount: 20,
      brand: "Tesla",
      category_id: "category_id",
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car name test",
      description: "Car description test",
      daily_rate: 100,
      license_plate: "TEST-1234",
      fine_amount: 20,
      brand: "Tesla",
      category_id: "category_id",
    });

    await carsRepositoryInMemory.create({
      name: "Car name test 2",
      description: "Car description test 2",
      daily_rate: 100,
      license_plate: "TEST-12345",
      fine_amount: 20,
      brand: "BMW",
      category_id: "category_id2",
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "category_id",
    });

    console.log(cars);

    expect(cars).toEqual([car]);
  });
});
