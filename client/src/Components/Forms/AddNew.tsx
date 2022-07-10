import { Link } from "react-router-dom";

const AddNewWorker = () => {
    return(
        <form
        autoComplete="off"
        className="col-6 offset-3 mt-5">

            <fieldset className="form-control p-5">

                <div className="form-floating mb-3">
                    <input
                    id="name"
                    placeholder="=Add name"
                    className="form-control"
                    type="text" />
                    <label htmlFor="name">Worker name</label>
                </div>

                <div className="form-floating mb-3">
                    <input
                    id="password"
                    placeholder="=Add password"
                    className="form-control"
                    type="password" />
                    <label htmlFor="password">Add password</label>
                </div>

                <div className="form-floating mb-5">
                    <input
                    id="confirm"
                    placeholder="=Confirm password"
                    className="form-control"
                    type="password" />
                    <label htmlFor="confirm">Confirm password</label>
                </div>

                <div className="d-flex align-items-center justify-content-between">
                    <Link
                    className="btn btn-light"
                    to="/">Cancel</Link>
                    <button className="btn btn-primary">Save worker</button>
                </div>

            </fieldset>

        </form>
    )
}

export default AddNewWorker;