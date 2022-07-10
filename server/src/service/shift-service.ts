import { RepositoryLayer } from "../repository/data-source"; 
import { Worker } from "../entity/worker";
import { Shift } from "../entity/shift";
import { Service, Inject } from "typedi";
import { Day, TimeSlot } from "../entity/shift";


@Service()
export class ShiftService {

    @Inject()
    private readonly repositoryLayer: RepositoryLayer

    constructor() {}

    /* 
    * Retriever all shifts pertaining to a particular worker.
    */
    async getAllShifts(worker: Worker): Promise<Shift[]> {
        const results = await this.repositoryLayer.getRepository(Shift).find({
            relations: { worker: true },
            where: { worker: worker }
        });
        return results;
    }

    async addNewShift(worker: Worker, shiftData: { day: Day, time_slot: TimeSlot }): Promise<Shift> {
        // a worker cannot have two shifts in the same day
        const shifts = await this.repositoryLayer.getRepository(Shift).find({
            relations: { worker: true },
            where: { worker: worker, day: shiftData.day }
        });

        if (shifts.length > 0) {
            throw Error("A worker cannot have multiple shifts in the same day!");
        }

        // add the new shift
        const newShift = new Shift();
        newShift.day = shiftData.day;
        newShift.time_slot = shiftData.time_slot;
        newShift.worker = worker;
        return await this.repositoryLayer.manager.save(newShift);
    }
}