import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PlannerBox from "../../Components/Planner/PlannerBox";

import "./planner.scss";

const Planner = () => {

    const userData = localStorage.getItem("user");
    const nav = useNavigate();

    // If user not exist redirect to homepage
    if(!userData) {
        toast.warn("Session expired, please login again.", {
            toastId: "session_expired"
        })
        setTimeout(() => {
            nav("/");
        }, 3000)
    }

    return(
        <div className="row">

            <h1 className="text-center">Worker planner</h1>

            <div className="col-12 mt-5">

                <div className="planner d-flex justify-content-between">

                    <div className="planner-row w-100">
                        <h5 className="mb-3">Monday</h5>
                        <div className="planner-body">
                            <div className="shift">
                                <PlannerBox
                                shift="08"
                                day="Monday" />
                                <PlannerBox
                                shift="16"
                                day="Monday" />
                                <PlannerBox
                                shift="24"
                                day="Monday" />
                            </div>
                        </div>
                    </div>

                    <div className="planner-row w-100">
                        <h5 className="mb-3">Tuesday</h5>
                        <div className="planner-body">
                            <div className="shift">
                            <PlannerBox
                                shift="08"
                                day="Tuesday" />
                                <PlannerBox
                                shift="16"
                                day="Tuesday" />
                                <PlannerBox
                                shift="24"
                                day="Tuesday" />
                            </div>
                        </div>
                    </div>

                    <div className="planner-row w-100">
                        <h5 className="mb-3">Wednesday</h5>
                        <div className="planner-body">
                            <div className="shift">
                            <PlannerBox
                                shift="08"
                                day="Wednesday" />
                                <PlannerBox
                                shift="16"
                                day="Wednesday" />
                                <PlannerBox
                                shift="24"
                                day="Wednesday" />
                            </div>
                        </div>
                    </div>

                    <div className="planner-row w-100">
                        <h5 className="mb-3">Thursday</h5>
                        <div className="planner-body">
                            <div className="shift">
                            <PlannerBox
                                shift="08"
                                day="Thursday" />
                                <PlannerBox
                                shift="16"
                                day="Thursday" />
                                <PlannerBox
                                shift="24"
                                day="Thursday" />
                            </div>
                        </div>
                    </div>

                    <div className="planner-row w-100">
                        <h5 className="mb-3">Friday</h5>
                        <div className="planner-body">
                            <div className="shift">
                            <PlannerBox
                                shift="08"
                                day="Friday" />
                                <PlannerBox
                                shift="16"
                                day="Friday" />
                                <PlannerBox
                                shift="24"
                                day="Friday" />
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Planner;