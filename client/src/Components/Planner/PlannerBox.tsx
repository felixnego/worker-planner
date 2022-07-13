import axios from "axios";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import IShifts from "../../interface/IShifts";
import { addWorkerShift, editShift, removeShift } from "../../Services/RestAPI";
import "./plannerbox.scss";

const PlannerBox = (props: IShifts) => {

    const {day, shift, status, timeslot_id} = props;

    const userData = JSON.parse(localStorage.getItem("user") as string);
    const shiftRef = useRef<HTMLDivElement | null>(null);
    const checkExisting = shiftRef.current?.parentElement?.classList.value.indexOf('existing')

    const add = async () => {
        try {
            const add = await addWorkerShift(userData.id, day, shift, userData.token);

            if(add === "OK") {
                toast.success("Shift added.")
                setTimeout(() => {
                    window.location.reload()
                }, 1000)
            }

        } catch (err: any) {
            switch (err.response.status) {
                case 500:
                    toast.warn("A worker cannot have multiple shifts in the same day!", {toastId: "add_500"})
                break;
            }
        }
    }

    const edit = async () => {
        try {
            const edit = await editShift(userData.id, day, shift, timeslot_id as number, userData.token);

            if(edit) {
                toast.success("Shift changed.")
                setTimeout(() => {
                    window.location.reload()
                }, 1000)
            }

        } catch (err: any) {
            switch (err.response.status) {
                case 500:
                    toast.warn("A worker cannot have multiple shifts in the same day!", {toastId: "add_500"})
                break;
            }
        }
    }

    const remove = async() => {
        try {
            const remove = await removeShift(userData.id, timeslot_id as number, userData.token);

            if(remove === "OK") {
                toast.success("Shift removed.")
                setTimeout(() => {
                    window.location.reload()
                }, 1000)
            }
        } catch (err: any) {
            console.log(err);
        }
    }

    return(
        <div
        ref={shiftRef}
        className={`shift-box ${status ? 'active' : ''}`}>
            {
                checkExisting !== -1 && checkExisting !== undefined ?
                    status ?
                    <>
                        <span>Existing shift</span>
                        <br />
                        <button
                        onClick={remove}
                        className="btn btn-sm btn-danger mt-2">Delete</button>
                    </>
                    :
                    <>
                        <span>Cannot add</span>
                        <br />
                        <button
                        onClick={edit}
                        className="btn btn-sm btn-light mt-2">Edit</button>
                    </>
                :
                <>
                    <span>Add new</span>
                    <br />
                    <button
                    onClick={add}
                    className="btn btn-sm btn-primary mt-2">Add</button>
                </>
            }
        </div>
    )
}

export default PlannerBox;