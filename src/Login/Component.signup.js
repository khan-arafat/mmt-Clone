import { useState } from 'react';
import './loginPage.css';
import { useUserAuth } from './userAuthContext';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
export default function SignUp(){
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const {signup} = useUserAuth();
    const [error, setErr] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErr("");
        try {
            await(signup(email, password));
            navigate('/login');
        }catch(err) {
            setErr(err.message);
        }
    }
    return (
        <div className='signup'>
            <div className='signup-box'>
                <div className='logo-box2'>
                <p className='logo-text2'>make</p><div className='inner-logo2'>my</div><p className='logo-text2'>trip</p>
                </div>
                <div className="signup-content">
                    <form onSubmit={handleSubmit}>
                        <div className='signup-inside'>
                            <label htmlFor="user-email"><p>Enter your email</p></label>
                            <input type="text" id="user-email" placeholder="Enter email" className='logUser' onChange={(e)=>setEmail(e.target.value) } />
                            <label htmlFor="userPass"><p>Enter password</p></label>
                            <input type="password" id="userPass" placeholder="Enter password" className='logUser' onChange={(e)=>setPassword(e.target.value)} />
                            <button type='submit' id='logSubmit'>Signup</button>
                        </div>
                    </form>
                    <p style={{color:'red', textAlign:'center'}}>{error}</p>
                </div>
                <p style={{textAlign:'center'}}>Alraedy have an account?  <Link to='/login' style={{color:"blue", textDecoration:'underline'}}>Sign In</Link></p>
            </div>
        </div>
    )
}