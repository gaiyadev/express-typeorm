import {createConnection, Connection} from "typeorm";
import  { User } from '../entity/user'

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
        User
    ]
});

connection().then(() => console.log('Connected to database successfully'));