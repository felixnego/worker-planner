import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Shift } from "./shift";


@Entity()
export class Worker {

    @PrimaryGeneratedColumn()
    id?: number

    @Column({ unique: true })
    name: string

    @Column()
    password: string

    @OneToMany(() => Shift, (shift) => shift.worker)
    shifts?: Shift[]
}