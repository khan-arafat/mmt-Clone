import React, { useEffect, useState } from "react";
import './holiday.css';
import { useUserAuth } from "../../Login/userAuthContext";
import { useNavigate } from "react-router";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export const HolidaySchedule = () => {
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
            <div>{props.firstLine}</div>
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
                    <div>{props.header}</div>
                    <h4>{props.select}</h4>
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
            navigate('/home/holiday');
        }
    }
    function ImageDest(props){
        return (
            <div className="img-nav">
                <img src={props.url} />
                <h2>{props.title}</h2>
            </div>
        )
    }
  return (
    <div>
        <div className="bookings">
            <form style={{margin:'60px 0 0 20px'}}>
                <div className="holiday-nav">
                  <ImageDest url="https://th.bing.com/th/id/OIP.Z7LzMwyuerpiFcZVN3xi8wHaGp?pid=ImgDet&rs=1" title="Destination" />
                  <ImageDest url="https://th.bing.com/th/id/OIP.GyUxLTN6BZ2VvXxXgpIyOQHaFj?w=248&h=186&c=7&r=0&o=5&dpr=1.6&pid=1.7" title="Honeymoon" />
                  <ImageDest url="https://th.bing.com/th?id=OIP.r_J2t-juNLkRZ2O289KBOwHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.6&pid=3.1&rm=2" title = "Featured" />
                </div>
                <div className="booking-flex">
                   <PrimaryCard firstLine="From city" SecondLine="New Delhi" thirdLine="India" />
                   <PrimaryCard firstLine="To City/Country/Category" SecondLine="Goa" thirdLine="India" />
                   <CheckFunc header="Departure Date" select="Select Date" />
                   <CheckFunc header="Room & Guests" select="Select Rooms" />
                   <CheckFunc header="Filters" select="Select Filters (Optional)" />
                </div>
            </form>
            <button className='searchHoliday' onClick={handleQuery}>SEARCH</button>
        </div>
    </div> 
  )
}

