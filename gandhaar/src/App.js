import './App.css';
import Section1 from './components/section1';
import Header from './components/section_1/header';
import Section2 from './components/section2';
import Section3 from './components/section3';
import Section4 from './components/section4';
import Section5 from './components/section5';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
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
      </section>

      <section id='gallery'>
        <Section5></Section5>
      </section>
    </div>
  );
}

export default App;
