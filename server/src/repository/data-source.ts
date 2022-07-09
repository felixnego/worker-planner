import "reflect-metadata";
import { DataSource } from "typeorm";


export const PostgresDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "admin",
    password: "admin",
    database: "worker-planner",
    synchronize: true,
    logging: false,
    entities: ["src/entity/*{.js,.ts}"],
    migrations: ["src/migration/*{.js,.ts}"],
    migrationsTableName: "migrations",
    subscribers: [],
})