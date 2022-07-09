import express, { Express, Request, Response } from "express";
import config from './config';
import { RepositoryLayer } from "./repository/data-source";


// Establish database connection
const repositoryLayer: RepositoryLayer = new RepositoryLayer();
repositoryLayer.initialize()
    .then(() => console.log('Data Source initialized!'))
    .catch((error) => console.error(error));


// Set up the Express app
const app: Express = express();
app.use(express.json());
const PORT = config.port;


// Set up routes
app.get('/', (req: Request, res: Response) => {
    res.status(200).send('Server Online!');
})


app.listen(PORT, () => {
    console.log(`Server running and listening on port: ${PORT}...`);
})