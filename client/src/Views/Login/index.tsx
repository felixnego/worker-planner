import LoginForm from "../../Components/Forms/Login";

const Login = () => {

    return(
        <div className="row">

            <h1 className="text-center">Login</h1>

            {/* Form */}
            <LoginForm />
            {/* End Form */}

        </div>
    )
}

export default Login;