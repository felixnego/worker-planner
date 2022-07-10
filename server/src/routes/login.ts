import { Router, Request, Response } from "express";
import { WorkerService } from "../service/worker-service";
import { AuthService } from "../service/auth-service";
import { Container } from "typedi";


const loginRoutes = Router();
const workerService: WorkerService = Container.get(WorkerService);
const authService: AuthService = Container.get(AuthService);


loginRoutes.post('/login', async (req: Request, res: Response) => {
    const worker = await workerService.checkWorkerExists(req.body.name, req.body.password);
    if (worker !== null) {
        const token = authService.generateAccessToken(req.body.name);
        res.status(200);
        return res.json({
            token: token,
            id: worker.id
        });
    }

    return res.sendStatus(403);
})

export default loginRoutes;