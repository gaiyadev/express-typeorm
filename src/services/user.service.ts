import {Request, Response} from "express";
import {UserRepository} from "../repository/userRepository";
import {SignInDto} from "../dto/signin.dto";


export class UserService{
       private readonly  userRepository = new UserRepository();
    constructor( ) {
        this.userRepository = this.userRepository;
    }

    public signIn = async (req: Request, res:Response) => {
         const signInDto: SignInDto = req['body'];
         const user = await this.userRepository.signIn(signInDto)

        return res.json({
            message: "account created",
            user
        })
    }
}
