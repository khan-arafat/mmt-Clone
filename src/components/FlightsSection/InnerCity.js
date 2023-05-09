import { cityDetail } from "./Flights";
import { useContext } from "react";
import '../../styles/App.css'
import { AirportContext } from "../../contexts/AirportContext";
import { AirportContext2 } from "../../contexts/AirportContext2";

function InnerCity(){
    const {setClicked, setStartCity} = useContext(AirportContext);
    return (
        <div className="city-city">
            {cityDetail.map((el,idz)=>{
                return (
                    <div key={el.code}>
                        <div className='citySearch' id={el.code} onClick={(e)=>{
                            e.persist();
                            setStartCity(e.currentTarget.id);
                            setClicked(false);
                            }} >
                            <div className='searchCity'>
                                <p>{el.city}</p>
                                <p>{el.code}</p>
                            </div>
                            <p>{el.airport}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

function OuterCity(){
   const {setDestCity, setClicked2} = useContext(AirportContext2);
   return (
    <div className="city-city2">
        {cityDetail.map((el,idz)=>{
            return (
                <div key={el.code}>
                    <div className='citySearch' id={el.code} onClick={(e)=>{
                        e.persist();
                        setDestCity(e.currentTarget.id);
                        setClicked2(false);
                        }} >
                        <div className='searchCity'>
                            <p>{el.city}</p>
                            <p>{el.code}</p>
                        </div>
                        <p>{el.airport}</p>
                    </div>
                </div>
            )
        })}
        </div>
    )    
}

export {InnerCity, OuterCity}