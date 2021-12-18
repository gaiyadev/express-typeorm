import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity({name:"users"})
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    public id: number

    @Column()
    username:string;

    @Column()
    email: string;

    @Column()
    password: string
}