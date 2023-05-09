import React, { useEffect, useState } from "react";
import {BsCurrencyRupee} from 'react-icons/bs';
import { Radio, RadioGroup } from "react-radio-group";
import './hotels.css';
import { useUserAuth } from "../../Login/userAuthContext";
import { useNavigate } from "react-router";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export const HotelSchedule = () => {
    const [date, setDate] = useState(new Date);
    const [tomorrow, setTomorrow] = useState(new Date);
    const [city, setCity] = useState("Goa");
    const { user } = useUserAuth();
    const navigate = useNavigate();
    useEffect(()=>{
        let d = new Date();
        d.setDate(d.getDate()+1);
        setTomorrow(d);
    }, [])
    const PrimaryCard =(props)=>{
       return (
        <div className="inner-flex1H">
            <h5>{props.firstLine}</h5>
            <h2>{props.SecondLine}</h2>
            <div>{props.thirdLine}</div>
        </div>
       ) 
    }
    const CheckFunc = (props)=>{
        return (
            <div className="inner-flex2H">
                <h5>{props.firstLine}</h5>
                <div className="date-flex">
                    <h3>{props.date}</h3>
                    <p>{props.month}'</p>
                    <p>{props.year}</p>
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
            navigate('/home/hotel');
        }
    }
  return (
    <div>
        <div className="bookings">
            <form style={{margin:'60px 0 0 20px'}}>
                <RadioGroup name='travel' className="travelH">
                   <span><Radio value='room5' defaultChecked/>UPTO 5 ROOMS</span>
                   <span><Radio value='group' />GROUP DEALS</span>
                </RadioGroup>
                <div className="booking-flexH">
                    <PrimaryCard firstLine = "CITY, PROPERTY NAME OR LOCATION" SecondLine={city} thirdLine="India" />
                    <CheckFunc firstLine ="CHECK IN" date={date.getDate()} month={months[date.getMonth()]} year={date.getFullYear()} day={days[date.getDay()]} />
                    <CheckFunc firstLine ="CHECK OUT" date={tomorrow.getDate()} month={months[tomorrow.getMonth()]} year={tomorrow.getFullYear()} day={days[tomorrow.getDay()]} />
                    <PrimaryCard firstLine="ROOMS & GUESTS" SecondLine = "1 ROOM" thirdLine="2 Adults" />
                    <div className="pricingH">
                        <h5>PRICE PER NIGHT</h5>
                        <div className='pricesH'><BsCurrencyRupee />0-<BsCurrencyRupee />1500, <BsCurrencyRupee />1500-<BsCurrencyRupee />2000...</div>
                    </div>
                </div>
            </form>
            <button className='searchHotels' onClick={handleQuery}>SEARCH</button>
        </div>
    </div>
  )
}

