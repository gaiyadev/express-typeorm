import {EntityRepository, Repository} from "typeorm";
import {User} from "../entity/user";
import {SignInDto} from "../dto/signin.dto";
import {validate} from "class-validator";

@EntityRepository(User)
export class UserRepository extends Repository<User>{

    public signIn = async (signInDto:SignInDto) => {
        const {email, username, password, name} = signInDto;

        const user = new User();
        user.username= username;
        user.password = password;
        user.name= name;
        user.email = email;

        try{
            return await  user.save();
        }catch (e) {
            console.log(e)
        }

    }
}
