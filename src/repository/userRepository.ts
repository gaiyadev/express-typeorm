import {EntityRepository, Repository} from "typeorm";
import {User} from "../entity/user";
import {SignInInterface} from "../interface/signin.interface";

@EntityRepository(User)
export class UserRepository extends Repository<User>{

    public signIn = async (data:SignInInterface) => {
        const {email, username, password,name} = data;
        const user = new User();
        user.username= username;
        user.password = password;
        user.name= name;
        user.email = email,
            await  user.save();
        return data;
    }
}
