import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addWorker, userLogin } from "../../Services/RestAPI";

const AddNewWorker = () => {
    const nav = useNavigate();

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        let error = false;

        const name = e.target.elements.name.value.trim()
        const pass = e.target.elements.password.value
        const confirm = e.target.elements.confirm.value

        if(name === "") {
            error = true
            toast.warn("Worker name is mandatory", {
                toastId: "name_empty"
            })
        }

        if(pass !== confirm) {
            error = true
            toast.warn("Please make sure your passwords match.", {
                toastId: "pass_error"
            })
        }

        if(!error) {
            try {
                const add = await addWorker(name, pass)

                if(add) {
                    toast.success(`Worker added. You will be redirected to application page.`, {
                        toastId: "login_success"
                    })

                    setTimeout( async() => {

                        try {

                            const login = await userLogin(name, pass)

                            if(login.token) {
                                localStorage.setItem("user", JSON.stringify({
                                    name: name,
                                    id: login.id,
                                    token: login.token
                                }))

                                setTimeout(() => {
                                    nav("/planner")
                                }, 3000)
                            }

                        } catch (err: any) {
                            switch (err.response.status) {
                                case 403:
                                    toast.error("Invalid password or wrong username.", {toastId: "invalid_pass"})
                                break;
                            }
                        }

                    }, 1000)

                }

            } catch (error) {
                toast.error("Something went wrong, please try again.", {toastId: "wrong"})
            }
        }

    }

    return(
        <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="col-6 offset-3 mt-5">

            <fieldset className="form-control p-5">

                <div className="form-floating mb-3">
                    <input
                    id="name"
                    name="name"
                    placeholder="=Add name"
                    className="form-control"
                    type="text" />
                    <label htmlFor="name">Worker name</label>
                </div>

                <div className="form-floating mb-3">
                    <input
                    id="password"
                    name="password"
                    placeholder="=Add password"
                    className="form-control"
                    type="password" />
                    <label htmlFor="password">Add password</label>
                </div>

                <div className="form-floating mb-5">
                    <input
                    id="confirm"
                    name="confirm"
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