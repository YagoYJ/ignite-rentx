import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Category } from "./Category";

@Entity("cars")
class Car {
  @PrimaryColumn()
  id: string = "";

  @Column()
  name: string = "";

  @Column()
  description: string = "";

  @Column()
  daily_rate: number = 0;

  @Column()
  available: boolean = true;

  @Column()
  license_plate: string = "";

  @Column()
  fine_amount: number = 0;

  @Column()
  brand: string = "";

  @ManyToOne(() => Category)
  @JoinColumn({ name: "category_id" })
  category: Category = {} as Category;

  @Column()
  category_id: string = "";

  @CreateDateColumn()
  created_at: Date = new Date();

  constructor() {
    if (!this.id) {
      this.id = uuid();
      this.created_at = new Date();
    }
  }
}

export { Car };
