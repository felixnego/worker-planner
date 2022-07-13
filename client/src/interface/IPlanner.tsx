interface IPlanner {
    name?: string,
    time_slots?: ITimeSlot[]
}

interface ITimeSlot {
    time_slot: "string",
    status: boolean,
    id: number
}

export default IPlanner;