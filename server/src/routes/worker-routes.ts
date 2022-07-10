import { Router, Request, Response } from "express";
import { WorkerService } from "../service/worker-service";
import { Container } from "typedi";
import { Worker } from "../entity/worker";


const workerRoutes = Router();
const workerService: WorkerService = Container.get(WorkerService);


workerRoutes.get('/worker', async (req: Request, res: Response) => {
    const data = await workerService.getAllWorkers();
    return res.json(data);
})

workerRoutes.post('/worker', async (req: Request, res: Response) => {
    const newWorker: Worker = await workerService.addNewWorker(req.body);
    return res.send(newWorker);
})

export default workerRoutes;