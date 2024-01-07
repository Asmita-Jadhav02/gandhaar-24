import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Home';
import EventDetails from './EventDetails';


import { useEffect, useState } from 'react';
import Loader from './components/preloader/loader';

function App() {

  const rulebooks = {
    'fashion': 'https://raw.githubusercontent.com/Asmita-Jadhav02/gandhaar-imgs/main/Rules/fashion.json',
    'culinary': 'https://raw.githubusercontent.com/Asmita-Jadhav02/gandhaar-imgs/main/Rules/culinary.json', 
    'dance': 'https://raw.githubusercontent.com/Asmita-Jadhav02/gandhaar-imgs/main/Rules/dance.json', 
    'music' :'https://raw.githubusercontent.com/Asmita-Jadhav02/gandhaar-imgs/main/Rules/music.json', 
    'artistic': 'https://raw.githubusercontent.com/Asmita-Jadhav02/gandhaar-imgs/main/Rules/artistic.json', 
    'performing_arts': 'https://raw.githubusercontent.com/Asmita-Jadhav02/gandhaar-imgs/main/Rules/performing_arts.json', 
    'theater' :'https://raw.githubusercontent.com/Asmita-Jadhav02/gandhaar-imgs/main/Rules/theater.json', 
    'online_events' : 'https://raw.githubusercontent.com/Asmita-Jadhav02/gandhaar-imgs/main/Rules/online_events.json', 
    'body_canvas' :'https://raw.githubusercontent.com/Asmita-Jadhav02/gandhaar-imgs/main/Rules/body_canvas.json',
    'workshops': 'https://raw.githubusercontent.com/Asmita-Jadhav02/gandhaar-imgs/main/Rules/workshops.json',
    'trivia': 'https://raw.githubusercontent.com/Asmita-Jadhav02/gandhaar-imgs/main/Rules/trivia.json'
  }

  const [isLoading, setIsLoading] = useState(true);
  const [isStarted, setIsStarted] = useState(false);


  useEffect(() => {
      const fakeFetchData = () => {
          setTimeout(() => {
              setIsLoading(false);
          }, 4000);
      }

      fakeFetchData();
      setTimeout(() => {
          setIsStarted(true);
      }, 15000);
  }, [])

  const handleStartClick = () => {
      setIsLoading(false);
      setIsStarted(true);
  };


  return (
    <div className="App">
      { isLoading ? (
        <Loader onStartClick={handleStartClick} />
    ) : isStarted ? (
      <Router>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/events/:link_id" element={<EventDetails data={rulebooks} />} />
        </Routes>
      </Router>
    ): (
      <Loader onStartClick={handleStartClick} />
  )}



      
    </div>
  );
}

export default App;
