import React from 'react';
import "../styles/App.css";
import { NavLink } from 'react-router-dom';
import {SlPlane} from 'react-icons/sl';
import {RiHotelLine} from 'react-icons/ri';
import {IoHome, IoTrain, IoBus} from 'react-icons/io5';
import {FaParachuteBox} from 'react-icons/fa';
import {BsFillCloudsFill, BsCarFrontFill, BsCurrencyExchange} from 'react-icons/bs';
import {GiAirplane} from 'react-icons/gi';
import {TbTrekking} from 'react-icons/tb';

const ServicesOffered= ()=>{
    const navLinkStyles = ({ isActive }) => {
        return {
            "border-bottom" : isActive ? "4px solid #2376f4" : "none",
            "text-decoration": "none",
            color : isActive ? "#2376f4" : "gray",
            display: 'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            "padding-bottom": "3px",
            "font-size": "14px",
            "font-family": "Arial"
        };
    }
    return ( 
        <div className='services'>
            <NavLink style={navLinkStyles} to='/flights' defaultChecked><SlPlane style={{fontSize:"25px"}} /><div>Flights</div></NavLink>
            <NavLink style={navLinkStyles} to='/hotels'><RiHotelLine style={{fontSize:"25px"}} /><div>Hotels</div></NavLink>
            <NavLink style={navLinkStyles} to='/homestays'><IoHome style={{fontSize:"25px"}} /><div>Home Stays</div></NavLink>
            <NavLink style={navLinkStyles} to='/holidays'><div><FaParachuteBox style={{fontSize:"25px"}} /><BsFillCloudsFill /></div><div>Holiday Packages</div></NavLink>
            <NavLink style={navLinkStyles} to='/trains'><IoTrain style={{fontSize:"25px"}} /><div>Trains</div></NavLink>
            <NavLink style={navLinkStyles} to='/buses'><IoBus style={{fontSize:"25px"}} /><div>Buses</div></NavLink>
            <NavLink style={navLinkStyles} to='/cabs'><BsCarFrontFill style={{fontSize:"25px"}} /><div>Cabs</div></NavLink>
            <NavLink style={navLinkStyles} to='/forexes'><BsCurrencyExchange style={{fontSize:"25px"}} /><div>Forex</div></NavLink>
            <NavLink style={navLinkStyles} to='/charters'><GiAirplane style={{fontSize:"25px"}} /><div>Charter Flight</div></NavLink>
            <NavLink style={navLinkStyles} to='/activities'><TbTrekking style={{fontSize:"25px"}} /><div>Activities</div></NavLink>
        </div>
    )
}
export {ServicesOffered};