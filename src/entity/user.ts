import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity({name:"users"})
export class User {
    @PrimaryGeneratedColumn()
    public id: number

    @Column()
    username:string;

    @Column()
    email: string;

    @Column()
    password: string
}