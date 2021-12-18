import {
    BaseEntity,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";


@Entity({name:"users"})
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    public id: number

    @Column()
    name:string

    @Column()
    username:string;

    @Column()
    email: string;

    @Column()
    password: string

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;
}