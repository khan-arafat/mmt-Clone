import {useContext, useEffect, useState} from "react";
import './Flights.css';
import { useNavigate } from "react-router";
import { PaymentContext } from "../../Payments/PaymentContext";

export default function BookFlights(){
    const [dataObtained, setDataObtained] = useState([]);
    const [date, setDate] = useState(new Date());
    const navigate = useNavigate();
    const { setSurcharge, setPrice } = useContext(PaymentContext);


    useEffect(()=>{
        const url = 'https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights';
        fetch(url)
    .then((res)=>{
        res.json()
        .then((data)=>{
            setDataObtained(data);
        })
    })
    } , [])
    
    return (
       <>
        <h3 style={{marginLeft: '5px'}}>Available Tickets</h3>
        <div className="ticket-container">
            {dataObtained.map((el, idx)=>{
                return (
                    <div className="tkt-box" key={idx}>
                        <table>
                            <tr>
                                <td>FROM</td>
                                <td>DEPARTURE</td>
                                <td>PRICE</td>
                            </tr>
                            <tr>
                                <td><h4>{el.from}</h4></td>
                                <td><h4>{el.departure.departureTime}|{date.getDate()}-{date.getMonth()}-{date.getFullYear()}</h4></td>
                                <td>{el.price}</td>
                            </tr>
                            <tr>
                                <td>TO</td>
                                <td>RETURN</td>
                                <td>VIA</td>
                            </tr>
                            <tr>
                                <td><h4>{el.to}</h4></td>
                                <td><h4>{el.return.returnTime}|{date.getDate()}-{date.getMonth()}-{date.getFullYear()}</h4></td>
                                <td>{el.via.length ? el.via[0] : "N/A"}</td>
                            </tr>
                            <tr>
                                <td>Airline:</td>
                                <td>Duration:</td>
                            </tr>
                            <tr>
                                <td><h4>{el.airlineName}</h4></td>
                                <td><h4>{el.duration}</h4></td>
                            </tr>
                        </table>
                        <button className="book-btn" id={el.price} onClick={ (e)=>{
                            e.persist();
                            console.log(e.currentTarget.id);
                            setPrice(parseInt(e.currentTarget.id));
                            setSurcharge(parseInt(e.currentTarget.id)*0.15);
                            navigate('/payments');
                        }
                        }>BOOK</button>
                    </div>
                )
            })}
        </div>
       </> 
    )
}