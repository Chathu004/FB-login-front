import './login.css'
import "bootstrap/dist/css/bootstrap.min.css"

function Login() {
    return (
        <>
            <div className="container">

                {/* <div className="content"> */}
                <div className=" justify-content-center row">

                    <div className="col-lg-6 col-sm-12">
                        <h1 className="logo">facebook</h1>
                        <p>Connect with friends and the world around you on Facebook.</p>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <form>
                            <input type="text" placeholder="Email or Phone Number" required />
                            <input type="password" placeholder="Password" required />
                            <button className="login">Log In</button>
                            <a href="#">Forgot Password ?</a>
                            <hr />
                            <button className="create-account">Create New Account</button>
                        </form>
                    </div>

                </div>

            </div>
            {/* </div> */}


        </>
    );
};

export default Login