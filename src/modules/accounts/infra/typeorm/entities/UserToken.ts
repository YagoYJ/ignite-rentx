import { v4 as uuidV4 } from "uuid";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";

import { User } from "./User";

@Entity("users_token")
class UserToken {
  @PrimaryColumn()
  id: string = "";

  @Column()
  refresh_token: string = "";

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User = {} as User;

  @Column()
  user_id: string = "";

  @Column()
  expires_date: Date = new Date();

  @CreateDateColumn()
  created_at: Date = new Date();

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { UserToken };
