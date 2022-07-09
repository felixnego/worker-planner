import dotenv from 'dotenv';


dotenv.config();

export default {
    port: process.env.PORT,
    databaseHost: process.env.DATABASE_HOST,
    databaseUser: process.env.DATABASE_USER,
    databasePassword: process.env.DATABASE_PASSWORD,
    databaseName: process.env.DATABASE_NAME,
    databasePort: process.env.DATABASE_PORT || ''
}