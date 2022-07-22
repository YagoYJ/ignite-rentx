import "reflect-metadata";
import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import swaggerUi from "swagger-ui-express";

import { router } from "@shared/infra/http/routes/index";
import { AppError } from "@shared/errors/AppError";

import createConnection from "@shared/infra/typeorm/index";
import "@shared/container";

import swaggerFile from "../../../swagger.json";

createConnection("localhost")
  .then(() => {
    console.log("Database connected!");
  })
  .catch((error) => {
    console.log("Database connection error:", error);
  });

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message });
  } else {
    return res.status(500).json({
      status: "error",
      message: `Internal Server Error - ${err.message}`,
    });
  }
});

app.listen(3333, () => {
  console.log("Server Running");
});
