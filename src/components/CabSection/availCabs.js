import {useContext, useEffect, useState} from "react";
import './cabs.css';
import { PaymentContext } from "../../Payments/PaymentContext";
import { useNavigate } from "react-router";
export default function BookCabs(){
    const [dataObtained, setDataObtained] = useState([]);
    const [date, setDate] = useState(new Date());
    const {setPrice, setSurcharge} = useContext(PaymentContext);
    const navigate = useNavigate();

    useEffect(()=>{
        const url = 'https://mocki.io/v1/5e95ad40-079a-4e80-9338-2f50d7fd1926';
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
        <h3 style={{marginLeft: '5px'}}>Available Cabs</h3>
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
                                <td>Cab Provider:</td>
                                <td>Duration:</td>
                            </tr>
                            <tr>
                                <td><h4>{el.airlineName}</h4></td>
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