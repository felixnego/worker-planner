import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PlannerBox from "../../Components/Planner/PlannerBox";
import { getWorkerIdShift } from "../../Services/RestAPI";

import "./planner.scss";

const Planner = () => {

    const userData = JSON.parse(localStorage.getItem("user") as string);
    const nav = useNavigate();

    const [monday, setMonday] = useState<{time_slot: string, shift_id: number}>();
    const [tuesday, setTuesday] = useState<{time_slot: string, shift_id: number}>();
    const [wednesday, setWednesday] = useState<{time_slot: string, shift_id: number}>();
    const [thursday, setThursday] = useState<{time_slot: string, shift_id: number}>();
    const [friday, setFriday] = useState<{time_slot: string, shift_id: number}>();

    // If user not exist redirect to homepage
    if(!userData) {
        toast.warn("Session expired, please login again.", {
            toastId: "session_expired"
        })
        setTimeout(() => {
            nav("/");
        }, 3000)
    }

    const get = async() => {
        try {
            const response = await getWorkerIdShift(userData.id, userData.token);

            response.forEach((time: any) => {
                if(time.day === "monday") {
                    setMonday({
                        time_slot: time.time_slot,
                        shift_id: time.id
                    })
                }
                if(time.day === "tuesday") {
                    setTuesday({
                        time_slot: time.time_slot,
                        shift_id: time.id
                    })
                }
                if(time.day === "wednesday") {
                    setWednesday({
                        time_slot: time.time_slot,
                        shift_id: time.id
                    })
                }
                if(time.day === "thursday") {
                    setThursday({
                        time_slot: time.time_slot,
                        shift_id: time.id
                    })
                }
                if(time.day === "friday") {
                    setFriday({
                        time_slot: time.time_slot,
                        shift_id: time.id
                    })
                }
            })

        } catch (err: any) {
            switch (err.response.status) {
                case 403:
                    toast.error("Session has expires, please login again.", {toastId: "session_expired"})
                    setTimeout(() => {
                        nav("/login");
                    }, 3000)
                break;
            }
        }
    }

    useEffect(() => {
        get()
    }, [])

    return(
        <div className="row">

            <h1 className="text-center">Worker planner</h1>

            <div className="col-12 mt-5">

                <div className="planner d-flex justify-content-between">

                    <div className="planner-row w-100">
                        <h5 className="mb-3">Monday</h5>
                        <div className="planner-body">
                            <div className={`shift ${monday ? 'existing' : ''}`}>
                                <PlannerBox
                                status={monday?.time_slot === "00-08" ? true : false}
                                timeslot_id={monday?.shift_id}
                                shift="00-08"
                                day="monday" />
                                <PlannerBox
                                status={monday?.time_slot === "08-16" ? true : false}
                                timeslot_id={monday?.shift_id}
                                shift="08-16"
                                day="monday" />
                                <PlannerBox
                                status={monday?.time_slot === "16-24" ? true : false}
                                timeslot_id={monday?.shift_id}
                                shift="16-24"
                                day="monday" />
                            </div>
                        </div>
                    </div>

                    <div className="planner-row w-100">
                        <h5 className="mb-3">Tuesday</h5>
                        <div className="planner-body">
                            <div className={`shift ${tuesday ? 'existing' : ''}`}>
                            <PlannerBox
                                status={tuesday?.time_slot === "00-08" ? true : false}
                                timeslot_id={tuesday?.shift_id}
                                shift="00-08"
                                day="tuesday" />
                                <PlannerBox
                                status={tuesday?.time_slot === "08-16" ? true : false}
                                timeslot_id={tuesday?.shift_id}
                                shift="08-16"
                                day="tuesday" />
                                <PlannerBox
                                status={tuesday?.time_slot === "16-24" ? true : false}
                                timeslot_id={tuesday?.shift_id}
                                shift="16-24"
                                day="tuesday" />
                            </div>
                        </div>
                    </div>

                    <div className="planner-row w-100">
                        <h5 className="mb-3">Wednesday</h5>
                        <div className="planner-body">
                            <div className={`shift ${wednesday ? 'existing' : ''}`}>
                            <PlannerBox
                                status={wednesday?.time_slot === "00-08" ? true : false}
                                timeslot_id={wednesday?.shift_id}
                                shift="00-08"
                                day="wednesday" />
                                <PlannerBox
                                status={wednesday?.time_slot === "08-16" ? true : false}
                                timeslot_id={wednesday?.shift_id}
                                shift="08-16"
                                day="wednesday" />
                                <PlannerBox
                                status={wednesday?.time_slot === "16-24" ? true : false}
                                timeslot_id={wednesday?.shift_id}
                                shift="16-24"
                                day="wednesday" />
                            </div>
                        </div>
                    </div>

                    <div className="planner-row w-100">
                        <h5 className="mb-3">Thursday</h5>
                        <div className="planner-body">
                            <div className={`shift ${thursday ? 'existing' : ''}`}>
                            <PlannerBox
                                status={thursday?.time_slot === "00-08" ? true : false}
                                timeslot_id={thursday?.shift_id}
                                shift="00-08"
                                day="thursday" />
                                <PlannerBox
                                status={thursday?.time_slot === "08-16" ? true : false}
                                timeslot_id={thursday?.shift_id}
                                shift="08-16"
                                day="thursday" />
                                <PlannerBox
                                status={thursday?.time_slot === "16-24" ? true : false}
                                timeslot_id={thursday?.shift_id}
                                shift="16-24"
                                day="thursday" />
                            </div>
                        </div>
                    </div>

                    <div className="planner-row w-100">
                        <h5 className="mb-3">Friday</h5>
                        <div className="planner-body">
                            <div className={`shift ${friday ? 'existing' : ''}`}>
                            <PlannerBox
                                status={friday?.time_slot === "00-08" ? true : false}
                                timeslot_id={friday?.shift_id}
                                shift="00-08"
                                day="friday" />
                                <PlannerBox
                                status={friday?.time_slot === "08-16" ? true : false}
                                timeslot_id={friday?.shift_id}
                                shift="08-16"
                                day="friday" />
                                <PlannerBox
                                status={friday?.time_slot === "16-24" ? true : false}
                                timeslot_id={friday?.shift_id}
                                shift="16-24"
                                day="friday" />
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Planner;