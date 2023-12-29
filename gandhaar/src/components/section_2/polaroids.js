import React from "react";
import './polaroids.css';
import day1 from './images/Pajama Party.png';
import day2 from './images/South Indian Day.png';
import day3 from './images/Cowgirls.png';
import day4 from './images/Formals Day.png';


const Polaroid = () => {
    return (
        <>
            <div className="pre_themes">

                <section className="polaroid-themes">
                    <h1>
                        <span className="section-title" >Pre-Gandhaar</span><br></br>
                        <span>Themes and Activities</span>
                    </h1>

                    <figure className="polaroid-card">
                        <img src={day1} alt="Pre-Gandhaar Day 1" width="200" height="200"></img>
                        <figcaption className="polaroid-card-caption">
                            <span style={{fontSize:'18px'}}>Day 1</span><br></br>
                            <b style={{fontSize:'22px'}}>Pajama Party Day</b>
                            <br></br><br></br>
                            Activity of the Day<br></br>
                            <b>Movie Screening</b>

                        </figcaption>
                    </figure>

                    <figure className="polaroid-card">
                        <img src={day2} alt="Pre-Gandhaar Day 2" width="200" height="200"></img>
                        <figcaption className="polaroid-card-caption">
                            <span style={{fontSize:'18px'}}>Day 2</span><br></br>
                            <b style={{fontSize:'22px'}}>South Indian Day</b>
                            <br></br><br></br>
                            Activity of the Day<br></br>
                            <b>Pathak Performance</b>

                        </figcaption>
                    </figure>

                    <figure className="polaroid-card">
                        <img src={day3} alt="Pre-Gandhaar Day 3" width="200" height="200"></img>
                        <figcaption className="polaroid-card-caption">
                            <span style={{fontSize:'18px'}}>Day 3</span><br></br>
                            <b style={{fontSize:'22px'}}>Cowgirls Day</b>
                            <br></br><br></br>
                            Activity of the Day<br></br>
                            <b>Flashmob</b>

                        </figcaption>
                    </figure>

                    <figure className="polaroid-card">
                        <img src={day4} alt="Pre-Gandhaar Day 4" width="200" height="200"></img>
                        <figcaption className="polaroid-card-caption">
                            <span style={{fontSize:'18px'}}>Day 4</span><br></br>
                            <b style={{fontSize:'22px'}}>Formals Day</b>
                            <br></br><br></br>
                            Activity of the Day<br></br>
                            <b>Game Evening</b>

                        </figcaption>
                    </figure>



                </section>
            </div>
        </>
    )
}

export default Polaroid