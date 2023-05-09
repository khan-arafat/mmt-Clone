import React, { useEffect, useState } from "react";
import './homes.css';
import { useUserAuth } from "../../Login/userAuthContext";
import { useNavigate } from "react-router";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export const HomeSchedule = () => {
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
        <div className="inner-flex1">
            <h5>{props.firstLine}</h5>
            <h2>{props.SecondLine}</h2>
            <div>{props.thirdLine}</div>
        </div>
       ) 
    }
    const CheckFunc = (props)=>{
        return (
            <div className="inner-flex2">
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
            navigate('/home/homeStay');
        }
    }
  return (
    <div>
        <div className="bookings">
            <form style={{margin:'60px 0 0 20px'}}>
                <div>
                    <h5 style={{color:"#32C0E5", marginTop:"15px"}}>Book your ideal Homestay - Villas, Apartments & more.</h5>
                </div>
                <div className="booking-flex">
                    <PrimaryCard firstLine = "CITY, PROPERTY NAME OR LOCATION" SecondLine={city} thirdLine="India" />
                    <CheckFunc firstLine ="ADD CHECK IN" date={date.getDate()} month={months[date.getMonth()]} year={date.getFullYear()} day={days[date.getDay()]} />
                    <CheckFunc firstLine ="ADD CHECK OUT" date={tomorrow.getDate()} month={months[tomorrow.getMonth()]} year={tomorrow.getFullYear()} day={days[tomorrow.getDay()]} />
                    <PrimaryCard firstLine="ADD NUMBER OF GUESTS" SecondLine = "Adults & Children" thirdLine="" />
                    <PrimaryCard firstLine="TRAVELING FOR" thirdLine="SELECT A REASON OPTIONAL"  />
                </div>
            </form>
            <button className='searchHome' onClick={handleQuery}>SEARCH</button>
        </div> 
    </div>
  )
}

