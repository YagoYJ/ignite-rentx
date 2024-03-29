import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { getRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { IUsersRepository } from "../../../repositories/IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create(data: ICreateUserDTO): Promise<void> {
    const user = this.repository.create(data);

    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = this.repository.findOne({ email });

    return user;
  }

  async findById(id: string): Promise<User | undefined> {
    const user = this.repository.findOne(id);

    return user;
  }
}

export { UsersRepository };
