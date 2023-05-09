import React from "react";
import {FaFacebookF , FaTwitter, FaRegCopyright} from 'react-icons/fa';
import './footer.css'

export default function Footerfunc(){
    return (
        <div className="footer">
        <div className="information">
            <div className="block">
                <h5>PRODUCT OFFERING</h5>
                <div>Flights, International Flights, Charter Flights, Hotels, International Hotels, Homestays and Villas, Activities, Holidays In India, International Holidays, Book Hotels From UAE, myBiz for Corporate Travel, Book Online Cabs, Book Bus Tickets, Book Train Tickets, Cheap Tickets to India, Book Flights From US, Book Flights From UAE, Trip Planner, Gift Cards, Trip Money, Trip Ideas, Travel Blog, PNR Status, MakeMyTrip Advertising Solutions, One Way Cab</div>
            </div>
            <div className="block">
                <h5>MAKEMYTRIP</h5>
                <div>About Us, Investor Relations, Careers, MMT Foundation, CSR Policy, myPartner - Travel Agent Portal, Foreign Exchange, List your hotel, Partners- Redbus, Partners- Goibibo, Advertise with Us</div>
            </div>
            <div className="block">
                <h5>ABOUT THE SITE</h5>
                <div>Customer Support, Payment Security, Privacy Policy, User Agreement, Terms of Service, More Offices, Make A Payment, Work From Home</div>
            </div>
            <div className="block">
                <h5>IMPORTANT LINKS</h5>
                <div>Cheap Flights, Flight Status, Chennai Mumbai flights, Mumbai Hyderabad flights, Hyderabad Bangalore flights, Pune Bangalore flights, Mumbai Jaipur flights, Mumbai Chandigarh flights, Bangalore Kolkata flights, Hyderabad Visakhapatnam flights, Chandigarh Bangalore flights, Jaipur Mumbai flights, Mumbai Shirdi Flights, Mumbai to Delhi Flight</div>
            </div>
            <div className="block">
                <h5>QUICK LINKS</h5>
                <div>Flights Discount Coupons, Domestic Airlines, Indigo Airlines, Air Asia, SpiceJet, GoAir, Air India, Air India Express, Vistara, New Delhi Mumbai Flights, Pune Delhi Flights, Delhi Chennai Flights, Delhi Guwahati Flights, Mumbai Varanasi Flights, Guwahati Delhi Flights, Goa Delhi Flights, Delhi Goa Flights, Delhi Chennai Flights</div>
            </div>
        </div>
        <div className="social">
            <div className="social-icon">
                <a href="https://www.facebook.com/makemytrip" target="_blank"><FaFacebookF style={{fontSize:"50px"}}/></a>
                <a href="https://twitter.com/makemytrip" target="_blank"><FaTwitter style={{fontSize:"50px"}}/></a>
            </div>
            <div>
                <div className="copyright">
                    <FaRegCopyright style={{marginTop:"10px"}}/>
                    <h3>MMT</h3>
                </div>
                <div className="copyright"><p>Country <h5>India US</h5></p></div>
            </div>
        </div>
    </div>
    )
}