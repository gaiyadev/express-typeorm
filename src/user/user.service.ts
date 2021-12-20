import { Request, Response } from "express";
import { UserRepository } from "./repository/user.repository";
import { SignInDto } from "./dto/signin.dto";
import { Created, NotFound } from "../status-code/status";

export class UserService {
    private readonly userRepository = new UserRepository();
    constructor() {
        this.userRepository = this.userRepository;
    }

    public signIn = async (req: Request, res: Response) => {
        const signInDto: SignInDto = req['body'];
        const user = await this.userRepository.signIn(signInDto)

        return res.status(Created).json({
            message: "Account created successfully",
            user
        })
    }

    public fetchAll = async (req: Request, res: Response) => {
        const users = await this.userRepository.fetchAll();
        return res.json({ users: users, message: 'User fetched successfully' })
    }

    public fetchOne = async (req: Request, res: Response) => {
        const { id } = req.params;
        const user = await this.userRepository.fetchOne(+id);
        if (user) {
            return res.json({ users: user, message: 'User fetched successfully' })
        }
        return res.status(NotFound).json({ message: "User not found" })
    }

    public removeOne = async (req: Request, res: Response) => {
        const { id } = req.params;
        const user = await this.userRepository.removeOne(+id);
        if (user.affected === 0) {
            return res.json({ users: user, message: 'User not found' })
        }
        return res.status(NotFound).json({ message: "User deleted successfully" })
    }

    public updateOne = async (req: Request, res: Response) => {
        const signInDto: SignInDto = req['body'];
        const { id } = req.params;
        const user = await this.userRepository.updateOne(signInDto, +id)

        if (user) {
            return res.json({
                message: "Account updated successfully",
                user
            })
        }
        return res.status(NotFound).json({
            message: "User not found",
        })
    }
}
