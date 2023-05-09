import React, {useState} from 'react';
import '../styles/App.css';
import {Routes, Route} from 'react-router-dom';
import LoginPage from '../Login/Component.login.js';
import NavPage from './ContentPage';
import SignUp from '../Login/Component.signup';
import { AuthContextProvider } from '../Login/userAuthContext';
import BookFlights from './FlightsSection/availFlights';
import { Home } from '../Home';
import {FlightSchedule} from './FlightsSection/Flights.js'
import  ProtectedRoute  from '../ProtectedRoute';
import { HotelSchedule } from './HotelsSection/Hotels';
import  BookHotels  from  './HotelsSection/availHotels';
import { HomeSchedule } from './HomeStaySection/Homes';
import BookHomes from './HomeStaySection/availHomes';
import { HolidaySchedule } from './Holidays/holiday';
import TrainSchedule from './TrainsSection/train';
import BookTrains from './TrainsSection/availTrains';
import BusSchedule from './BusSection/buses';
import BookBuses from './BusSection/availBuses';
import CabSchedule from './CabSection/cabs';
import BookCabs from './CabSection/availCabs';
import ForexCards from './ForexSection/forex';
import CharterSchedule from './CharterFlightSection/charter';
import ActivitySchedule from './ActivitiesSection/activities';
import Footerfunc from '../FooterSection/footer';
import PaymentProceed from '../Payments/payment';
import { PaymentContext } from '../Payments/PaymentContext';
import { PricingContext } from '../Payments/PricingContext';

const App = () => {

  const [surcharge, setSurcharge] = useState(0);
  const [price, setPrice] = useState(0);
 
  return (
      <div id="main">
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<NavPage />}>
              <Route index element={<FlightSchedule />} />
              <Route path='flights' element = {<FlightSchedule />} />
              <Route path='hotels' element = {<HotelSchedule />} />
              <Route path='homestays' element={<HomeSchedule />} />
              <Route path='holidays' element={<HolidaySchedule />} />
              <Route path='trains' element = {<TrainSchedule />} />
              <Route path='buses' element = {<BusSchedule />} />
              <Route path='cabs' element = {<CabSchedule />} />
              <Route path='forexes' element= {<ForexCards />} />
              <Route path='charters' element= {<CharterSchedule />} />
              <Route path='activities' element= {<ActivitySchedule />} />
            </Route>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>}>
              <Route path='flight' element={<PaymentContext.Provider value= {{ setPrice, setSurcharge} }><BookFlights /></PaymentContext.Provider>} />
              <Route path='hotel' element={<PaymentContext.Provider value= {{ setPrice, setSurcharge} }><BookHotels /></PaymentContext.Provider>} />
              <Route path='homestay' element={<PaymentContext.Provider value= {{ setPrice, setSurcharge} }><BookHomes /></PaymentContext.Provider>} />
              <Route path='holiday' element={<h1 style={{fontWeight:"bold"}}>No Packages for now !</h1>} />
              <Route path='train' element={<PaymentContext.Provider value= {{ setPrice, setSurcharge} }><BookTrains /></PaymentContext.Provider>} />
              <Route path='bus' element = {<PaymentContext.Provider value= {{ setPrice, setSurcharge} }><BookBuses /></PaymentContext.Provider>} />
              <Route path='cab' element = {<PaymentContext.Provider value= {{ setPrice, setSurcharge} }><BookCabs /></PaymentContext.Provider>} />
            </Route>
            <Route path='/payments' element={<Home />}>
              <Route index element={<PricingContext.Provider value={{price, surcharge}}><PaymentProceed /></PricingContext.Provider>} />
            </Route>
          </Routes>
        </AuthContextProvider>
        <Footerfunc />
      </div>
  )
}

export default App;
