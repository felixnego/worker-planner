import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import AddWorker from "./AddWorker"
import Homepage from "./Homepage"
import Login from "./Login"
import Planner from "./Planner"

const Application = () => {

    const nav = useNavigate();
    const location = useLocation()
    const user = JSON.parse(localStorage.getItem("user") as string);

    if(user === null) {
        if(
            location.pathname !== "/" &&
            location.pathname !== "/login" &&
            location.pathname !== "/add-worker"
        ) {
            toast.warn("Session expired, please login again.", {
                toastId: "session_expired"
            })
            setTimeout(() => {
                nav("/");
            }, 3000)
        }
    }

    return(
        <div className={`container ${!user ?? 'mt-5 pt-5'}`}>

            {
                user ?
                    <header className="mb-5 pb-5 pt-3">
                        <div className="row">
                            <div className="col-12 text-end">
                            <span>Welcome, {user.name}</span>
                                <Link
                                className="btn btn-primary btn-sm ms-4"
                                to="/planner">Planner</Link>
                                <button className="btn btn-light btn-sm ms-4">Logout</button>
                            </div>
                        </div>
                    </header>
                : null
            }

            <Routes>

                {/* Homepage */}
                <Route path="/" element={<Homepage />} />

                {/* Add worker */}
                <Route path="/add-worker" element={<AddWorker />} />

                {/* Planner */}
                <Route path="/planner" element={<Planner />} />

                {/* Login */}
                <Route path="/login" element={<Login />} />

            </Routes>
        </div>
    )
}

export default Application