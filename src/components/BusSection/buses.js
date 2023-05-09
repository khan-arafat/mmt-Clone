import React, {useState} from "react";
import { useNavigate } from "react-router";
import { useUserAuth } from "../../Login/userAuthContext";
import { NavLink } from "react-router-dom";
import './buses.css';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export default function BusSchedule(){
    const [date, setDate] = useState(new Date());
    const { user } = useUserAuth();
    const navigate = useNavigate();
    const PrimaryCard =(props)=>{
        return (
        <div className="inner-train1">
            <div>{props.firstLine}</div>
            <h2>{props.SecondLine}</h2>
            <div>{props.thirdLine}</div>
        </div>
        ) 
    }
    const CheckFunc = (props)=>{
        return (
        <div className="inner-train2">
            <h5>{props.firstLine}</h5>
            <div className="date-flex">
                <h5>{props.date}</h5>
                <h2>{props.month}'</h2>
                <h5>{props.year}</h5>
            </div>
            <p>{props.day}</p>
        </div>
        )
    }
    const handleQuery = ()=>{
        if(!user){
            navigate('/login');
        }
        else {
            navigate('/home/bus');
        }
    }
    const handleStyle = ()=>{
        return {
            textDecoration: "none",
            color: "blue"
        }
    }
    return (
        <>
            <div className="bookings">
                <form style={{margin:'70px 0 0 20px'}}>
                    <h4>Bus Tickect Booking <NavLink style={handleStyle}>Travelling with group? Hire a bus</NavLink></h4>
                        <div className="booking-flex">
                            <PrimaryCard firstLine = "FROM" SecondLine="New Delhi, Delhi" thirdLine="India" />
                            <PrimaryCard firstLine = "TO" SecondLine="Kanpur, Uttar Pradesh" thirdLine="India" />
                            <CheckFunc firstLine ="TRAVEL DATE" date={date.getDate()} month={months[date.getMonth()]} year={date.getFullYear()} day={days[date.getDay()]} />
                        </div>
                </form>
                <button className='searchBuses' onClick={handleQuery}>SEARCH</button>
            </div>
        </>
    )
}