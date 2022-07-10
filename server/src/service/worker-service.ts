import 'reflect-metadata';
import { RepositoryLayer } from "../repository/data-source"; 
import { Worker } from "../entity/worker";
import { Service, Inject } from "typedi";
import crypto, { Hash } from 'crypto';


@Service()
export class WorkerService {

    @Inject()
    private readonly repositoryLayer: RepositoryLayer

    constructor() {}

    async getAllWorkers(): Promise<Worker[]> {
        const results = await this.repositoryLayer.getRepository(Worker).find();
        // const results = await repository.getRepository(Worker).find();
        return results;
    }

    async addNewWorker(workerData: { name: string, password: string }): Promise<Worker> {
        // encrypt the password
        workerData.password = crypto.createHash('sha256').update(workerData.password).digest('hex');
        // add new Worker to the database
        const newWorker: Worker = this.repositoryLayer.manager.create(Worker, workerData);
        await this.repositoryLayer.manager.save(newWorker);
        return newWorker;
    }
}