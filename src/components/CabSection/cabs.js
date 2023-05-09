import React, { useState } from "react";
import './cabs.css';
import {AiOutlineDown} from "react-icons/ai";
import { useUserAuth } from "../../Login/userAuthContext";
import { useNavigate } from "react-router";
import { RadioGroup, Radio } from "react-radio-group";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export default function CabSchedule(){
    const [dateObj, setDateObj] =useState(new Date());
    const { user } = useUserAuth();
    const navigate = useNavigate();
    const PrimaryCard =(props)=>{
       return (
        <div className="inner-flex1">
            <div>{props.firstLine}</div>
            <h2>{props.SecondLine}</h2>
        </div>
       ) 
    }
    const CheckFunc = (props)=>{
        return (
        <div className='arrDep'>
            <div className='arrDep-flex'><p>{props.query}</p><AiOutlineDown style={{padding:"5px", color:'skyblue', fontSize:'18px'}} /></div>
            <div className='arrDep-flex'><h3>{props.Date}</h3><p>{props.Month}</p><p>{props.Year}</p></div>
            <p>{props.Day}</p>
        </div>
        )
    }
    const handleQuery = ()=>{
        if(!user){
            navigate('/login');
        }
        else {
            navigate('/home/cab');
        }
    }
    return (
    <div>
        <div className="bookings">
            <form style={{margin:'70px 0 0 20px'}}>
                <div>
                    <RadioGroup name="travel" className='travel'>
                        <span><Radio value="one" />OUTSTATION ONE-WAY</span>
                        <span><Radio value="round" defaultChecked />OUTSTATION ROUND TRIP</span>
                        <span><Radio value="airTrans" />AIRPORT TRANSFERS</span>
                        <span><Radio value="hour" />HOURLY RENTALS</span>
                    </RadioGroup>
                </div>
                <div className="booking-flex">
                    <PrimaryCard firstLine="FROM" SecondLine="Mumbai" />
                    <PrimaryCard firstLine="TO" SecondLine="Pune" />
                    <CheckFunc query="Departure" Date={dateObj.getDate()} Month={months[dateObj.getMonth()]} Year={dateObj.getFullYear()} Day={days[dateObj.getDay()]} />
                    <CheckFunc query="Return" Date={dateObj.getDate()} Month={months[dateObj.getMonth()]} Year={dateObj.getFullYear()} Day={days[dateObj.getDay()]}/>
                    <CheckFunc query={<h5 style={{lineHeight:'1'}}>PICKUP TIME</h5>} Date="10:00" Year="AM"/>
                    <CheckFunc query={<h5>DROP TIME</h5>} Date="10:00" Year="AM"/>
                </div>
            </form>
            <button className='searchCabs' onClick={handleQuery}>SEARCH</button>
        </div>
    </div>
    )
}