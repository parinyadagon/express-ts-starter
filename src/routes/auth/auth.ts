import { AuthController } from "@/controllers/auth/auth";
import { Router } from "express";

export class AuthRoute {
  private route = Router();
  private authController = new AuthController();

  routes = () => {
    this.route.post("/", this.authController.login);

    return this.route;
  };
}
