import {useContext, useEffect, useState} from "react";
import './hotels.css';
import { PaymentContext } from "../../Payments/PaymentContext";
import { useNavigate } from "react-router";
export default function BookHotels(){
    const [dataObtained, setDataObtained] = useState([]);
    const [date, setDate] = useState(new Date());
    const [tomorrow, setTomorrow] = useState(new Date());
    const {setPrice, setSurcharge} = useContext(PaymentContext);
    const navigate = useNavigate();

    useEffect(()=>{
        const url = 'https://content.newtonschool.co/v1/pr/63b85bcf735f93791e09caf4/hotels';
        fetch(url)
    .then((res)=>{
        res.json()
        .then((data)=>{
            setDataObtained(data);
        })
    })
    const d = new Date();
    d.setDate(d.getDate() + 1);
    setTomorrow(d);
    } , [])
    return (
       <>
        <h3 style={{marginLeft: '5px'}}>Available Hotels</h3>
        <div className="ticket-container">
            {dataObtained.map((el, idx)=>{
                return (
                    <div className="tkt-box" key={idx}>
                        <table>
                            <tr>
                                <td>HOTEL</td>
                                <td>CHECK-IN</td>
                                <td>PRICE:</td>
                            </tr>
                            <tr>
                                <td><h4>{el.hotel_name}</h4></td>
                                <td><h4>{date.getDate()}-{date.getMonth()}-{date.getFullYear()}</h4></td>
                                <td>{el.price_per_night}</td>
                            </tr>
                            <tr>
                                <td>CITY</td>
                                <td>CHECK-OUT</td>
                                <td>ROOM:</td>
                            </tr>
                            <tr>
                                <td><h4>{el.city}</h4></td>
                                <td><h4>{tomorrow.getDate()}-{tomorrow.getMonth()}-{tomorrow.getFullYear()}</h4></td>
                                <td>{el.room_type}</td>
                            </tr>
                            <tr>
                                <td>RATING:</td>
                                <td>GUEST:</td>
                            </tr>
                            <tr>
                                <td><h4>{el.rating}/10</h4></td>
                                <td><h4>{el.guests}</h4></td>
                            </tr>
                        </table>
                        <button className="book-btn" id={el.price_per_night} onClick={(e)=>{
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