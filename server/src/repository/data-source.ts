import "reflect-metadata";
import { DataSource } from "typeorm";
import config from "../config";
import { Service } from "typedi";


/** 
 * The RepositoryLayer makes the DataSource from TypeORM
 * injectable using typedi. To be used in other services. 
*/
@Service()
export class RepositoryLayer extends DataSource {
    constructor() {
        super({
            type: "postgres",
            host: config.databaseHost,
            port: parseFloat(config.databasePort),
            username: config.databaseUser,
            password: config.databasePassword,
            database: config.databaseName,
            synchronize: true,
            logging: false,
            entities: ["src/entity/*{.js,.ts}"],
            migrations: ["src/migration/*{.js,.ts}"],
            migrationsTableName: "migrations",
            subscribers: [],
        })
    }
}
