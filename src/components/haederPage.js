import React from 'react';
import {Navigate, useNavigate} from 'react-router-dom';
import "../styles/App.css";
import {TbDiscount2 } from "react-icons/tb";
import {FiPercent} from "react-icons/fi";
import {BsBagCheckFill} from "react-icons/bs";
import {RiSuitcase2Fill} from "react-icons/ri";
import {AiOutlineDown} from "react-icons/ai";
import { useUserAuth } from '../Login/userAuthContext';


const LandPage = ()=>{
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
      <div className='container'>
        <div className='logo-box'>
          <p className='logo-text'>make</p><div className='inner-logo'>my</div><p className='logo-text'>trip</p>
        </div>
        <div className='innerElements'>
          <div className='special-offers'>
            <div className='disc'><TbDiscount2 className='disc-rotation' fill='purple' /><FiPercent className='disc-perc' fill='white'/></div>
            <div>
              <div>
                <p className='para-offer'>Special Offer</p>
                <p className='para-line'>Explore great deals and offers</p>
              </div>
            </div>
          </div>
          <div className='special-offers'>
              <div className='disc'>
              <BsBagCheckFill style={{color:'orange', fontSize:'30px'}}/><span style={{fontWeight:'500', color: 'white'}}>BIZ</span>
              </div>
              <p className='para-offer'>Introducing myBiz</p>
              <p className='para-line'>Business travel solution</p>
          </div>
          <div className='special-offers'>
              <div className='disc'>
              <RiSuitcase2Fill style={{color:'#bbb', fontSize:'30px'}}/><span style={{fontWeight:'500', color: 'white'}}>my Trips</span>
              </div>
              <p className='para-offer'>Manage your bookings</p>
          </div>
          {user ?<div className='loginDiv'><button className='btn-logout' onClick={handleLogout}><div className='dot'>my</div><div>LogOut</div></button></div> : <div className='loginDiv'><button className='btn-log' onClick={()=>navigate('login')}><div className='dot'>my</div><div>Login or Create Account</div><div><AiOutlineDown style={{fontSize:'20px', marginLeft:'10px'}} /></div></button></div>}
        </div>
      </div>
  )
}
export default LandPage;