import React from "react";
import './activities.css'
export default function ActivitySchedule(){
   const ActivityCard = ()=>{
    return (
        <>
            <div className="activity-card">
                <h3 style={{textAlign: "center", color:"blue"}}>Book any kind of activity, tour or daytrip</h3>
                <h4>SEARCH</h4>
                <div className="activity-flex">
                    <div className="activity-box"></div>
                    <div>
                        <h2>Activities, Tour, Destination</h2>
                        <p>Explore the world and adventure with us</p>
                    </div>
                </div>
            </div>
        </>
    )
   }
   return (
       <>
         <div className="activity-book">
            <ActivityCard />
         </div>
       </>
    )
}