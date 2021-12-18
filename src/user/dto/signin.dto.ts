import {IsEmail, IsNotEmpty} from "class-validator";

export class SignInDto {

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    password:string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    username: string;

}