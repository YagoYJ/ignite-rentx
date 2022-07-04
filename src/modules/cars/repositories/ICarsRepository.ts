import { ICreateCarDTO } from "../dtos/ICreateCar";

interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<void>;
}

export { ICarsRepository };
