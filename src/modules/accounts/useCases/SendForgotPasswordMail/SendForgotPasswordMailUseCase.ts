import { inject, injectable } from "tsyringe";
import { v4 as uuidV4 } from "uuid";

import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { IUsersTokenRepository } from "@modules/accounts/repositories/IUsersTokenRepository";
import { AppError } from "@shared/errors/AppError";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";
import { IMailProvider } from "@shared/container/providers/MailProvider/IMailProvider";

@injectable()
class SendForgotPasswordMailUseCase {
  constructor(
    @inject("UsersRepository")
    private UsersRepository: IUsersRepository,
    @inject("UsersTokenRepository")
    private UsersTokenRepository: IUsersTokenRepository,
    @inject("DayjsDateProvider")
    private dayjsDateProvider: IDateProvider,
    @inject("EtherealMailProvider")
    private mailProvider: IMailProvider
  ) {}

  async execute(email: string): Promise<void> {
    const user = await this.UsersRepository.findByEmail(email);

    if (!user) {
      throw new AppError("User does not exists!");
    }

    const token = uuidV4();

    await this.UsersTokenRepository.create({
      user_id: user.id as string,
      refresh_token: token,
      expires_date: this.dayjsDateProvider.addHours(3),
    });

    await this.mailProvider.sendMail(
      email,
      "Recuperação de senha",
      `O link para nova senha é ${token}`
    );
  }
}

export { SendForgotPasswordMailUseCase };
