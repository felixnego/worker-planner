import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()
export class Worker {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    name: string

    @Column()
    password: string
}