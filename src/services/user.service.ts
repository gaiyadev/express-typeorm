import {Request, Response} from "express";
import {UserRepository} from "../repository/userRepository";
import {getConnection, getRepository, Repository} from "typeorm";
import {SignInInterface} from "../interface/signin.interface";


export class UserService{
       private readonly  userRepository = new UserRepository();
    constructor( ) {
        this.userRepository = this.userRepository;
    }

    public signIn = async (req: Request, res:Response) => {
         const body: SignInInterface = req['body'];
       const d  = await this.userRepository.signIn(body)
        const g = JSON.stringify(d);
        return res.json({
            d
        })
    }
}
