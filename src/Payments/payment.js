import React, { useState } from "react";
import './payment.css';
import { PriceDetails } from "./paySummary";
import { PaymentContext } from "./PaymentContext";


export default function PaymentProceed(){
    
    return (
    <>
        <p className="warning">* Developer project for educational purpose do not enter any confidential details</p>
        <h3 style={{marginLeft:"10px"}}>Billing Section</h3>
        <div className="pay-flex">
            <PriceDetails />
            <div className="payCol">
                <h2>Payment Method</h2>
                <form>
                    <input type="text" placeholder="Name on Card" />
                    <input type="text" maxLength="19" placeholder="Card Number: 1234 1234 1234 1234" />
                    <input type="text" placeholder="Expiry Date MM/YY" />
                    <input type="text" placeholder="CVV" maxLength="3" />
                    <button type="Submit" className="pay-btn">Pay</button>
                </form>
            </div>
        </div>
    </>
    )
    
}


