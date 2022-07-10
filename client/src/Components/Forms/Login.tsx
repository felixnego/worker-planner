import { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { userLogin } from "../../Services/RestAPI";

const LoginForm = () => {

    const location = useLocation();
    const nav = useNavigate();

    const pass = useRef<HTMLInputElement | null>(null);

    // Check if name exist
    if(!location.state) {
        toast.error("You must select a worker.", {toastId: "worker_unavailable"});

        setTimeout(() => {
            nav("/")
        }, 1000)

    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if(pass.current?.value !== "") {
            try {

                const login = await userLogin(location.state as string, pass.current?.value as string)

                if(login.token) {
                    localStorage.setItem("user", JSON.stringify({
                        name: location.state,
                        id: login.id,
                        token: login.token
                    }))
                    toast.success(`Welcome ${location.state}, you will be redirected to application.`, {
                        toastId: "login_success"
                    })

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
        }

    }

    return(
        <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className="col-6 offset-3 mt-5">

            <fieldset className="form-control p-5">

                <div className="mb-4">
                    <p>Welcome <strong>{`${location.state}`}</strong>, <br /> Please add your password in order to use the application.</p>
                </div>

                <div className="form-floating mb-3">
                    <input
                    ref={pass}
                    id="password"
                    placeholder="=Add password"
                    className="form-control"
                    type="password" />
                    <label htmlFor="password">Password</label>
                </div>

                <div className="d-flex align-items-center justify-content-between">
                    <Link
                    className="btn btn-light btn-sm"
                    to="/">Cancel</Link>
                    <button className="btn btn-primary">Login</button>
                </div>

            </fieldset>

        </form>
    )
}

export default LoginForm;