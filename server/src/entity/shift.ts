import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne } from "typeorm";
import { Worker } from "./worker";


enum Day {
    MONDAY = "monday",
    TUESDAY = "tuesday",
    WEDNESDAY = "wednesday",
    THURSDAY = "thursday",
    FRIDAY = "friday"
}

enum TimeSlot {
    ONE = "00-08",
    TWO = "08-16",
    THREE = "16-24"
}


@Entity()
export class Shift {

    @PrimaryGeneratedColumn()
    id?: number

    @Column({
        type: "enum",
        enum: Day
    })
    day: Day

    @Column({
        type: "enum",
        enum: TimeSlot
    })
    time_slot: TimeSlot

    @ManyToOne(() => Worker, (worker) => worker.shifts)
    worker: Worker
}