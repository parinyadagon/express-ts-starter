import express, { json, urlencoded } from "express";
import morgan from "morgan";
import cors from "cors";

import { AuthRoute } from "@/routes/auth/auth";

export class ExpressApp {
  private app = express();
  private authRoute = new AuthRoute();

  constructor() {
    this.initialize();
    this.initializeRoutes();
  }

  private initialize = () => {
    this.app.use(morgan("dev"));
    this.app.use(cors({ origin: "*" }));
    this.app.use(urlencoded({ extended: true }));
    this.app.use(json());
  };

  private initializeRoutes = () => {
    this.app.use("/api/auth", this.authRoute.routes());
  };

  run = (service: string, port: string) => {
    this.app.listen(port, () => console.log(`Service ${service} running on http://localhost:${port}`));
  };
}
