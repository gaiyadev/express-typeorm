import {createConnection, Connection} from "typeorm";
import  { UserRepository } from '../repository/userRepository'

const connection = async ()  => <Connection> await createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "mathias",
    database: "express-typeorm",
    synchronize: true,
    logging: false,
    entities:[
        UserRepository
    ]
});

connection().then(() => console.log('Connected to database successfully'));