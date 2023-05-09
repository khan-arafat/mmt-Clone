import './forex.css';
import React from 'react';
import {BsCreditCard, BsFillCreditCard2BackFill} from 'react-icons/bs';
import {HiCurrencyDollar, HiCurrencyPound, HiCurrencyRupee} from 'react-icons/hi'
import {SlGlobe} from 'react-icons/sl'
export default function ForexCards(){
    const MoneyCards = (props)=>{
        return (
        <div className="cardContainer">
            <div className="img-box">
                {props.element}
            </div>
            <div>
                <h3>{props.header}</h3>
                <p>{props.message}</p>
                <p>{props.text}</p>
            </div>
        </div>
        )
    }
    return (
        <div className='cardGrid'>
            <div className='innerGrid'>
            <MoneyCards element = {<BsCreditCard style={{fontSize:"50px"}}/>}
             header = "Global INR Card"
             message="- INR Loaded 0% Forex Mark-up VISA Card, saving up to 5% on forex rates."
             text="- 100% digital card with complete control at your fingertip." />
             <MoneyCards element = {<BsFillCreditCard2BackFill style={{fontSize:"50px", color:"navy"}}/>}
             header = "Forex Travel Card"
             message="- Multi-currency forex card with no rate surprises. 0% forex markup over Interbank rates."
             text="- Same day door delivery." />
             <MoneyCards element = {<div style={{display:"inline-block", textAlign:"center"}}><HiCurrencyDollar style={{fontSize:"20px"}}/><HiCurrencyPound style={{fontSize:"20px"}}/><HiCurrencyRupee style={{fontSize:"20px"}}/></div> }
             header = "Forex Currency/Cash"
             message="- Buy or Sell foreign currency notes at live and best exchange rates around you."
             text="- Same day door delivery." />
             <MoneyCards element = {<SlGlobe style={{fontSize:"50px", color:"navy"}}/>}
             header = "International Money Transfer"
             message="- 5 minutes fully digital online process. Lowest fees and best forex rates."
             text="- Receive funds abroad in 12-48 hours." />
            </div> 
        </div>
    )
}