import { RepositoryLayer } from "../repository/data-source"; 
import { Worker } from "../entity/worker";
import { Service } from "typedi";


@Service()
export class WorkerService {

    constructor(private readonly repositoryLayer: RepositoryLayer) {}

    getAllWorkers() {
        
    }
}