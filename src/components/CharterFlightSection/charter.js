import React from "react";
import './charter.css';
export default function CharterSchedule(){
    const CharterCard = ()=>{
        return (
            <>
                <div className="charter-card">
                    <h3 style={{textAlign: "center", color:"gray"}}>Induldge in an Uber luxirious flight experience.</h3>
                    <h4>SEARCH</h4>
                    <div className="charter-flex">
                        <div className="image-box">
                            
                        </div>
                        <div>
                            <h5>Ensure zero crowd and max safety with charter flight</h5>
                            <p>Now fly on your own terms with charter flight</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className="charter-book">
            <CharterCard />
        </div>
    )
}