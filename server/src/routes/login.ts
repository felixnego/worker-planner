import { Router, Request, Response } from "express";
import { WorkerService } from "../service/worker-service";
import { AuthService } from "../service/auth-service";
import { Container } from "typedi";


const loginRoutes = Router();
const workerService: WorkerService = Container.get(WorkerService);
const authService: AuthService = Container.get(AuthService);


loginRoutes.post('/login', async (req: Request, res: Response) => {
    
})