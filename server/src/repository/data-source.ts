import "reflect-metadata";
import { DataSource } from "typeorm";
import config from "../config";


export const PostgresDataSource = new DataSource({
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