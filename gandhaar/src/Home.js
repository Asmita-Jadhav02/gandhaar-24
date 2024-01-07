import React from "react";

import Section1 from './components/section1';
import Header from './components/section_1/header';
import Section2 from './components/section2';
import Section3 from './components/section3';
import Section4 from './components/section4';
import Section5 from './components/section5';
import Section6 from './components/section6';
import Section7 from './components/section7';
import Section9 from './components/section9';
import Section10 from "./components/section10";
import Navbar from './components/navbar/navbar';
import Footer from "./components/footer/footer";



const Home = () => {
   

    return (
        <div className="Home-Page">

            <Navbar />
            <section id='home'>
                <Header></Header>
                <Section1></Section1>
            </section>

            <section id='themes'>
                <Section2></Section2>
                <Section3></Section3>
            </section>

            <section id='events'>
                <Section4></Section4>
                <Section5></Section5>
            </section>

            <section id='gallery'>
                <Section6></Section6>
                <Section7></Section7>
            </section>

            <Section9></Section9>
            <Section10></Section10>
            <Footer></Footer>
        </div>
    );

}

export default Home