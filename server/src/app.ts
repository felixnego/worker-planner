import "reflect-metadata";
import express, { Express, Request, Response } from "express";
import config from './config';
import { RepositoryLayer } from "./repository/data-source";
import workerRoutes from "./routes/worker-routes";
import loginRoutes from "./routes/login";
import shiftRoutes from "./routes/shift-routes";
import { Container } from "typedi";
import cors from 'cors';


// Establish database connection
const repositoryLayer: RepositoryLayer = Container.get(RepositoryLayer);
repositoryLayer.initialize()
    .then(() => console.log('Data Source initialized!'))
    .catch((error) => console.error(error));


// Set up the Express app
const app: Express = express();
app.use(express.json());
app.use(cors());
const PORT = config.port;


// Set up routes
app.get('/', (req: Request, res: Response) => {
    res.status(200).send('Server Online!');
})
app.use(workerRoutes);
app.use(loginRoutes);
app.use(shiftRoutes);


app.listen(PORT, () => {
    console.log(`Server running and listening on port: ${PORT}...`);
})