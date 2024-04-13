import { Link } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        console.log(form.get('password'));
    }
    return (
        <div className="bg-base-200">
            <Navbar></Navbar>
            <h2 className="text-center text-2xl font-bold mt-5">Please Login</h2>
            <form onSubmit={handleSubmit} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <div className="text-center">
                <p>Do not have an account ? <Link to={"/register"} className="text-red-600">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;