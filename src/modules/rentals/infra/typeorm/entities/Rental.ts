import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Car } from "@modules/cars/infra/typeorm/entities/Car";

@Entity("rentals")
class Rental {
  @PrimaryColumn()
  id?: string;

  @ManyToOne(() => Car)
  @JoinColumn({ name: "car_id" })
  car: Car = {} as Car;

  @Column()
  car_id: string = "";

  @Column()
  user_id: string = "";

  @Column()
  start_date: Date = new Date();

  @Column()
  end_date: Date = new Date();

  @Column()
  expected_return_date: Date = new Date();

  @Column()
  total: number = 0;

  @CreateDateColumn()
  created_at: Date = new Date();

  @UpdateDateColumn()
  updated_at: Date = new Date();

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Rental };
