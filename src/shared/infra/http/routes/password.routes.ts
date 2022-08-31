import { SendForgotPasswordMailController } from "@modules/accounts/useCases/SendForgotPasswordMail/SendForgotPasswordMailController";
import { Router } from "express";

const passwordRoutes = Router();

const forgotPasswordMailController = new SendForgotPasswordMailController();

passwordRoutes.post("/forgot", forgotPasswordMailController.handle);

export { passwordRoutes };
