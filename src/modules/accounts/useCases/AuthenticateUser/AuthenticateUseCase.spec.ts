import { AppError } from "@shared/errors/AppError";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UserRepositoryInMemory";

import { CreateUserUseCase } from "../CreateUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate User", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory
    );
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it("Shold be able to authenticate user", async () => {
    const user: ICreateUserDTO = {
      driver_license: "324324423",
      email: "test@example.com",
      password: "123",
      name: "Test User",
    };

    await createUserUseCase.execute({ ...user });

    const userResponse = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(userResponse).toHaveProperty("token");
  });

  it("Should not be able to authenticate an nonexistent user", async () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: "test@email.com",
        password: "123",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("Should not be able to authenticate an user with a incorrect password", async () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        driver_license: "999999",
        name: "Test",
        email: "test@email.com",
        password: "123",
      };

      await createUserUseCase.execute({
        ...user,
      });

      await authenticateUserUseCase.execute({
        email: user.email,
        password: "321",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
