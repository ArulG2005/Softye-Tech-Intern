import { Link } from 'react-router';
import './login.css'
import Login from './Login';

function SignUp(){
    return(
        <div className="App">
        <form action="">
            <h2>Sign up</h2>
            <div className="input">
                <input type="text"placeholder="Username" required/>
                <input type="email"placeholder="Email" required/>
                <input type="password" placeholder="Password" required/>
                <input type="password" placeholder="Confirm Password" required/>
                
            </div>
            <div className="btn">
                <button type="Submit">Sign up</button>
            </div>
            <div className="signup">
                Already have an account ? <Link to='/'>Login</Link>
            </div>
        </form>
        
    </div>
    );
}

export default SignUp;