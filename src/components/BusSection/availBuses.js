import {useEffect, useState, useContext} from "react";
import './buses.css';
import { PaymentContext } from "../../Payments/PaymentContext";
import { useNavigate } from "react-router";
export default function BookBuses(){
    const [dataObtained, setDataObtained] = useState([]);
    const [date, setDate] = useState(new Date());
    const { setPrice, setSurcharge } = useContext(PaymentContext);
    const navigate = useNavigate();
    useEffect(()=>{
        const url = 'https://demo8506543.mockable.io/';
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
        <h3 style={{marginLeft: '5px'}}>Available Bus Tickets</h3>
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
                                <td>TRAVELLER SERVICES</td>
                                <td>KILOMETERS</td>
                            </tr>
                            <tr>
                                <td><h4>{el.to}</h4></td>
                                <td><h4>{el.bus_name}</h4></td>
                                <td>{el.kilometers}</td>
                            </tr>
                            <tr>
                                <td>Duration:</td>
                            </tr>
                            <tr>
                                <td><h4>{el.duration}</h4></td>
                            </tr>
                        </table>
                        <button className="book-btn" id={el.price} onClick={(e)=>{
                            e.persist();
                            setPrice(parseInt(e.currentTarget.id));
                            setSurcharge(parseInt(e.currentTarget.id)*0.25);
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