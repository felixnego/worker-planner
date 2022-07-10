import { Router, Request, Response } from "express";
import { WorkerService } from "../service/worker-service";
import { Container } from "typedi";
import { Worker } from "../entity/worker";
import { authenticateToken } from "../middleware/authenticate-token";
import { ShiftService } from "../service/shift-service";


const shiftRoutes = Router();

const workerService: WorkerService = Container.get(WorkerService);
const shiftService: ShiftService = Container.get(ShiftService);


shiftRoutes.get('/worker/:id/shift', authenticateToken, async (req: Request, res: Response) => {
    const worker = await workerService.findWorkerById(parseFloat(req.params.id));
    if (worker !== null) {
        const data = await shiftService.getAllShifts(worker);
        res.statusCode = 200;
        return res.json(data);
    }
    return res.sendStatus(404);
})

shiftRoutes.post('/worker/:id/shift', authenticateToken, async (req: Request, res: Response) => {
    const worker = await workerService.findWorkerById(parseFloat(req.params.id));
    if (worker !== null) {
        try {
            await shiftService.addNewShift(worker, req.body)
        } catch(err: any) {
            console.log(err);
            return res.status(500).send(err.message);
        }

        return res.sendStatus(200);
    }
    return res.sendStatus(404);
})

export default shiftRoutes;