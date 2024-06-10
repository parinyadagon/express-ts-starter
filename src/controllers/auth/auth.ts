import { UserService } from "@/services/user/user";
import { Response, Request } from "express";
export class AuthController {
  private userService = new UserService();

  login = async (req: Request, res: Response) => {
    const users = await this.userService.findAll();

    const { username, password } = req.body;

    res.status(200).json({ data: { username, password } });
  };
}
