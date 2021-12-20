import { createConnection, Connection } from "typeorm";
import { User } from "../user/entity/user.entity";

const connection = async () => <Connection>await createConnection({
    type: "postgres",
    host: process.env["DATABASE_HOST "],
    port: +process.env["DATABASE_HOST "],
    username: "postgres",
    password: "root",
    database: process.env["DATABASE "],
    synchronize: true,
    logging: false,
    entities: [
        User,
    ]
});

connection().then(() => console.log('Connected to database successfully'))
    .catch(err => console.error(`Unable to connect to database${err}`));