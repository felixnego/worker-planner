import IShifts from "../../interface/IShifts";
import "./plannerbox.scss";

const PlannerBox = (props: IShifts) => {

    const {day, shift} = props;

    return(
        <div className="shift-box">
            box
            {day} <br />
            {shift}
        </div>
    )
}

export default PlannerBox;