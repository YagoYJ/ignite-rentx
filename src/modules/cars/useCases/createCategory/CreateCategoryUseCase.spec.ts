import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

import { CategoriesRepositoryInMemory } from "@modules/cars/repositories/in-memory/CategoriesRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe("Create Category", () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoryInMemory
    );
  });

  it("Shold be able to create a new category", async () => {
    const category = {
      name: "Category test",
      description: "Category description test",
    };

    await createCategoryUseCase.execute(category);

    const categoryCreated = await categoriesRepositoryInMemory.findByName(
      category.name
    );

    expect(categoryCreated).toHaveProperty("id");
  });

  it("Shold not be able to create a duplicate category", async () => {
    const category = {
      name: "Category test",
      description: "Category description test",
    };

    await createCategoryUseCase.execute(category);

    await expect(await createCategoryUseCase.execute(category)).rejects.toEqual(
      new AppError("Category already exists")
    );
  });

  it("Shold not be able to create a category without a name", async () => {
    const category = {
      name: "",
      description: "Category description test",
    };

    await expect(await createCategoryUseCase.execute(category)).rejects.toEqual(
      new AppError("Name or description is missing")
    );
  });

  it("Shold not be able to create a category without a description", async () => {
    const category = {
      name: "Category Test",
      description: "",
    };

    await expect(createCategoryUseCase.execute(category)).rejects.toEqual(
      new AppError("Name or description is missing")
    );
  });
});
