import { Router, Request, Response } from "express";
import { WorkerService } from "../service/worker-service";
import { Container } from "typedi";
import { Worker } from "../entity/worker";
import { AuthService } from "../service/auth-service";


const workerRoutes = Router();
const workerService: WorkerService = Container.get(WorkerService);
const authService: AuthService = Container.get(AuthService);


workerRoutes.get('/worker', async (req: Request, res: Response) => {
    const data = await workerService.getAllWorkers();
    return res.json(data);
})

workerRoutes.post('/worker', async (req: Request, res: Response) => {
    // this also acts as a Register route
    const newWorker: Worker = await workerService.addNewWorker(req.body);
    const token = authService.generateAccessToken(req.body.name);
    return res.json(token);
})

export default workerRoutes;