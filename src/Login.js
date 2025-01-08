import './login.css';
import { Link } from 'react-router';
function Login(){
    return(
        <div className="App">
        <form action="">
        <h2>Login</h2>
        <div className="input">
                <input type="text" placeholder="Username" required/>
                <input type="password" placeholder="Password" required/>
                <div className="forget-pass">
                   <a href=""> Forget Password ?</a>
                </div>
            </div>
            <div className="btn">
                <button type="Submit">Login</button>
            </div>
            <div className="signup">
                Don't have an account ? <Link to='/signup'>SignUp</Link>
            </div>
        </form>
        
    </div>
    );
}

export default Login;