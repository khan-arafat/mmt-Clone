import React, {useState, useEffect, useContext} from "react";
import './payment.css';
import {TbCurrencyRupee} from 'react-icons/tb';
import { PricingContext } from "./PricingContext";



export const PriceDetails = ()=>{
    const {price, surcharge} = useContext(PricingContext);
    const [amount, setAmount] = useState(0);
     
    useEffect(()=>{
        setAmount(()=>surcharge + price);
    }, []);

    return (<>
        <div className="payCol">
            <h2>Fare Summary</h2>
            <div className="payLeft-flex">
                <h5>Base Fare</h5>
                <div className="amt-div"><TbCurrencyRupee />{price}</div>
            </div>
            <hr />
            <div className="payLeft-flex">
                <h5>Fee & Surcharges</h5>
                <div className="amt-div"><TbCurrencyRupee />{surcharge}</div>
            </div>
            <hr />
            <div className="payLeft-flex">
                <h5>Total Amount</h5>
                <div className="amt-div"><TbCurrencyRupee />{amount}</div>
            </div>
            <hr />
        </div> 
    </>)
}
