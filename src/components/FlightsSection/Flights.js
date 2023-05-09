import React, { useEffect, useState } from 'react';
import './Flights.css';
import {RadioGroup, Radio} from 'react-radio-group';
import {AiOutlineDown} from "react-icons/ai";
import {InnerCity, OuterCity } from './InnerCity';
import { AirportContext } from '../../contexts/AirportContext';
import { AirportContext2 } from '../../contexts/AirportContext2';
import { useUserAuth } from '../../Login/userAuthContext';
import { useNavigate } from 'react-router';

const cities= ["Delhi", "Mumbai", "Goa", "Kolkata", "Banglore", "Chennai"];
const cityDetail= [
    {
        city:"Delhi",
        code:"DEL",
        airport:"Delhi Airport India"
    },
    {   city:"Mumbai",
        code:"BOM",
        airport:"Chatrapati Shivaji Airport"
    },
    {   city:"Goa",
        code:"GOI",
        airport:"Goa Dabolim International Airport"
    },
    {   city:"Kolkata",
        code:"CCU",
        airport:"Netaji S.C. Bose International Airport"
    },
    {   city:"Banglore",
        code:"BLR",
        airport:"Bengaluru International Airport"
    },
    {   city:"Chennai",
        code:"MAA",
        airport:"Chennai International Airport"
    }
]
const FlightSchedule = ()=>{
    const [fromCity, setFromCity] = useState({
        name:"Delhi",
        code:"DEL",
        port:"Delhi International Airport"
    });
    const [toCity, setToCity] = useState({
        name:"Mumbai",
        code:"BOM",
        port:"Chatrapati Shivaji Airport"
    });
    const {user} = useUserAuth();
    const navigate = useNavigate();
    const [clicked, setClicked] = useState(false);
    const [clicked2, setClicked2] = useState(false)
    const handleCity = (e)=>{
        setClicked(true);
    }
    const handleCity2 = (e)=>{
        setClicked2(true);
    }
    const [startCity, setStartCity]= useState('DEL');
    const [destCity, setDestCity] = useState('BOM');
    
    useEffect(()=>{
        let tempArray=cityDetail.filter((ele)=>{
            if(ele.code===startCity){
                return ele;
            }
        })
        let tempObj ={
            name:tempArray[0].city,
            code:tempArray[0].code,
            port:tempArray[0].airport
        }
        setFromCity(tempObj);
    }, [startCity, clicked]);
    useEffect(()=>{
        let tempArray=cityDetail.filter((ele)=>{
            if(ele.code===destCity){
                return ele;
            }
        })
        let tempObj ={
            name:tempArray[0].city,
            code:tempArray[0].code,
            port:tempArray[0].airport
        }
        setToCity(tempObj);
    }, [destCity, clicked2]);
    const CityCard = (props)=>{
        return (
            <div className='cityCard' onClick={handleCity}>
                <p>{props.way}</p>
                <h3>{props.city}</h3>
                <p>{props.airport}</p>
                <p>{props.code}</p>
            </div>
        )
    }
    const CityCard2 = (props)=>{
        return (
            <div className='cityCard' onClick={handleCity2}>
                <p>{props.way}</p>
                <h3>{props.city}</h3>
                <p>{props.airport}</p>
                <p>{props.code}</p>
            </div>
        )
    }
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const [dateObj, setDateObj] =useState(new Date());
    const DateCard = (props)=>{
        return (
            <div className='arrDep'>
                <div className='arrDep-flex'><p>{props.query}</p><AiOutlineDown style={{padding:"5px", color:'skyblue', fontSize:'20px', fontWeight:'bold'}} /></div>
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
            navigate('/home/flight');
        }
    }
    
    return (
        <div>
            <div className='bookings'>
                <form style={{margin:'60px 0 0 20px'}}>
                    <RadioGroup className='travelType'>
                        <div><Radio value="one" defaultChecked />One Way</div>
                        <div><Radio value="round" />Round Trip</div>
                        <div><Radio value="multi" />Multi City</div>
                    </RadioGroup>
                    <div className='booking-flex'>
                        <CityCard way="From" city={fromCity.name} airport={fromCity.port} code={fromCity.code} />
                        <CityCard2 way="To" city={toCity.name} airport={toCity.port} code={toCity.code} />
                        <DateCard query="Departure" Date={dateObj.getDate()} Month={months[dateObj.getMonth()]} Year={dateObj.getFullYear()} Day={days[dateObj.getDay()]} />
                        <DateCard query="Return" Date={dateObj.getDate()} Month={months[dateObj.getMonth()]} Year={dateObj.getFullYear()} Day={days[dateObj.getDay()]}/>
                        <DateCard query="Travellers & Class" Date="1 Traveller" Day="Economy/Premium Economy"/>
                    </div>
                    <div className='fare-type'>
                    <h3>Select A fare type</h3>
                    <RadioGroup name="fare" className='fare'>
                        <div className='fare-flex'><Radio value="regular" defaultChecked/><p>Regular fares</p></div>
                        <div className='fare-flex'><Radio value="armed" /><p>Armed Forces fares</p></div>
                        <div className='fare-flex'><Radio value="student" /><p>Student Fares</p></div>
                        <div className='fare-flex'><Radio value="senior" /><p>Senior citizen fares</p></div>
                        <div className='fare-flex'><Radio value="doctors" /><p>Doctors & Nurses fares</p></div>
                        <div className='fare-flex'><Radio value="double" /><p>Double seat fares</p></div>
                    </RadioGroup>
                    </div>
                </form>
                <button className='searchFor' onClick={handleQuery}>SEARCH</button>
            </div>
            <AirportContext.Provider value={{setClicked, setStartCity}}>
                <div>{clicked ? <InnerCity /> : ""}</div>
            </AirportContext.Provider>
            <AirportContext2.Provider value={{setDestCity, setClicked2}}>
                <div>{clicked2 ? <OuterCity /> : ""}</div>
            </AirportContext2.Provider>
        </div>
    )
}
export {FlightSchedule, cityDetail}