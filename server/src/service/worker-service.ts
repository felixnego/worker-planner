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
        return results;
    }

    async findWorkerById(id: number): Promise<Worker | null> {
        return await this.repositoryLayer.getRepository(Worker).findOneBy({ id: id})
    }

    async addNewWorker(workerData: { name: string, password: string }): Promise<Worker> {
        // encrypt the password
        workerData.password = crypto.createHash('sha256').update(workerData.password).digest('hex');
        // add new Worker to the database
        const newWorker: Worker = this.repositoryLayer.manager.create(Worker, workerData);
        await this.repositoryLayer.manager.save(newWorker);
        return newWorker;
    }

    async checkWorkerExists(name: string, password: string): Promise<Worker | null> {
        // check is the worker name and password exist for login
        const worker = this.repositoryLayer.getRepository(Worker).findOneBy({
            name: name,
            password: crypto.createHash('sha256').update(password).digest('hex')
        })
        return worker;
    }
}