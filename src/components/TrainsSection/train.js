import React, { useEffect, useState } from "react";
import { Radio, RadioGroup } from "react-radio-group";
import './train.css';
import { useUserAuth } from "../../Login/userAuthContext";
import { useNavigate } from "react-router";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export default function TrainSchedule(){
    const [date, setDate] = useState(new Date());
    const { user } = useUserAuth();
    const navigate = useNavigate();
    const PrimaryCard =(props)=>{
        return (
        <div className="inner-train1">
            <h5>{props.firstLine}</h5>
            <h2>{props.SecondLine}</h2>
            <h5>{props.thirdLine}</h5>
        </div>
        ) 
    }
    const CheckFunc = (props)=>{
        return (
        <div className="inner-train2">
            <h5>{props.firstTitle}</h5>
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
            navigate('/home/train');
        }
    }
    return (
        <div className="bookings">
            <form style={{margin:'70px 0 0 20px'}}>
                <RadioGroup name='travel' className="travel">
                   <span><Radio value='room5' defaultChecked/>BOOK TRAIN TICKETS</span>
                   <span><Radio value='group' />CHECK PNR STATUS</span>
                   <span><Radio value='group' />LIVE TRAIN STATUS</span>
                </RadioGroup>
                <div className="booking-flex">
                    <PrimaryCard firstLine = "FROM" SecondLine="New Delhi" thirdLine="NDLS, New Delhi Railway Station" />
                    <PrimaryCard firstLine="TO" SecondLine = "Kanpur" thirdLine="CNB, Kanpur Central" />
                    <CheckFunc firstTitle ="TRAVEL DATE" date={date.getDate()} month={months[date.getMonth()]} year={date.getFullYear()} day={days[date.getDay()]} />
                    <CheckFunc firstTitle ="CLASSES" date="" month="ALL" year="" day={<>ALL CLASS</>} />
                </div>
            </form>
            <button className='searchTrains' onClick={handleQuery}>SEARCH</button>
        </div> 
    )
}