import React from 'react';
import './styles/App.css';
import { Outlet, useNavigate } from 'react-router'
import { useUserAuth } from './Login/userAuthContext';
import { Navigate } from 'react-router';
export const Home = () => {
    const navigate = useNavigate();
    const {user, logOut} = useUserAuth();
    const handleLogout = async ()=>{
        try {
          await(logOut());
          <Navigate to='/' />
        } catch (error) {
          alert(error.message);
        }
      }
  return (
    <div>
        <div className='header1'>
            <div className='logo-box' onClick={()=>navigate('/')}>
                <p className='logo-text'>make</p><div className='inner-logo'>my</div><p className='logo-text'>trip</p>
            </div>
            <div className='loginDiv'><button className='btn-logout' onClick={handleLogout}><div className='dot'>my</div><div>LogOut</div></button></div>
        </div>
        <Outlet />
    </div>
  )
}
