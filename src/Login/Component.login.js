import './loginPage.css';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleButton } from 'react-google-button'
import { useState } from 'react';
import { useUserAuth } from './userAuthContext';
export default function LoginPage(){
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const {signIn} = useUserAuth();
    const [error, setErr] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErr("");
        try {
            await(signIn(email, password));
            navigate('/');
        }catch(err) {
            setErr(err.message);
        }
    }
    return (
        <>
            <div className="login-body">
                <div className="login-flex">
                    <div>
                        <img src="https://www.travelsiteindia.com/blog/wp-content/uploads/2017/10/flora-and-fauna-of-kerala.jpg" />
                    </div>
                    <div className='login-box'>
                        <div className='logo-box2'>
                        <p className='logo-text2'>make</p><div className='inner-logo2'>my</div><p className='logo-text2'>trip</p>
                        </div>
                        <div className="login-content">
                           <form onSubmit={handleSubmit}>
                                <label htmlFor="user-email"><p>Enter your email</p></label>
                                <input type="text" id="user-email" placeholder="Enter email" className='logUser' onChange={(e)=>setEmail(e.target.value)} />
                                <label htmlFor="userPass"><p>Enter password</p></label>
                                <input type="password" id="userPass" placeholder="Enter password" className='logUser' onChange={(e)=>setPassword(e.target.value)} />
                                <button type='submit' id='logSubmit'>Login</button>
                           </form>
                           <p>OR</p>
                           <GoogleButton />
                        </div>
                        <p>Create an account? <Link to="/signup" style={{color:"blue", textDecoration:'underline'}}>Sign Up</Link></p>
                        <p style={{color:'red', textAlign:'center'}}>{error}</p>
                    </div>
                </div>
            </div>
        </>
    )
}