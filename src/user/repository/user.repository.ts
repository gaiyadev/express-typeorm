import { EntityRepository, Repository} from "typeorm";
import {User} from "../entity/user.entity";
import {SignInDto} from "../dto/signin.dto";

@EntityRepository(User)
export class UserRepository extends Repository<User>{

    /**
     *  create a user
     **/
    public signIn = async (signInDto: SignInDto) => {
        const {email, username, password, name} = signInDto;

        const user = new User();
        user.username= username;
        user.password = password;
        user.name= name;
        user.email = email;
        try{
            return await  user.save();
        }catch (err) {
           return err
        }

    }
/**
 *  Fetch all users
 **/
    public fetchAll = async () =>  {
       return await User.find();
    }

    /**
     *  Fetch one user
     * */
    public fetchOne = async (id: number) =>  {
        return await User.findOne(id);
    }

    /**
     *  Fetch one user
     **/
    public removeOne = async (id: number) =>  {
        return await User.delete(id)
    }

    public updateOne = async (signInDto: SignInDto, id: number) => {
        const {email, username, password, name} = signInDto;
        const user = await this.fetchOne(id);
        if(!user) {
             return;
        }
        user.username= username;
        user.password = password;
        user.name= name;
        user.email = email;
        try{
            return await  user.save();
        }catch (err) {
            return err
        }

    }
}
