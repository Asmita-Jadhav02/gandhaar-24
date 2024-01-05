import './App.css';
import Section1 from './components/section1';
import Header from './components/section_1/header';
import Section2 from './components/section2';
import Section3 from './components/section3';
import Section4 from './components/section4';
import Section8 from './components/section8';
import Navbar from './components/navbar/Navbar';

import TeamCarousel from './components/section_8/TeamCarousel';
import DeveloperTeam from './components/section_8/DeveloperTeam';
import { useEffect, useState } from 'react';
import Loader from './components/loader/Loader';
import Schedule from './components/schedule/Schedule';


function App() {

  const [isLoading,setIsLoading] = useState(true);
  const [isStarted, setIsStarted] = useState(false);


  useEffect(() => {
    const fakeFetchData = () => {
      setTimeout(()=>{
        setIsLoading(false);
      },4000);
    }

    fakeFetchData();
  },[])

  const handleStartClick = () => {
    setIsStarted(true);
  };



   return isLoading ? (
    <Loader onStartClick={handleStartClick} />
  ) : isStarted ? (
    <div className="App">
       <Navbar/>
      <section id='home'>
        <Header/>
        <Section1></Section1>
      </section>
     
      <section id='pre-gandhaar'>
      <Section2></Section2>
      </section>
      <section id='day-wise-themes'>
      <Section3></Section3>
      </section>
      
      <section id='section4'>
        <Section4></Section4>
      </section>

      <section id='team'>
       <DeveloperTeam/>
      </section>
     
      <section id='schedule'>
        <Schedule/>
      </section>
     
    </div>
  ) : (
    <Loader onStartClick={handleStartClick} />
  );
}

export default App;
