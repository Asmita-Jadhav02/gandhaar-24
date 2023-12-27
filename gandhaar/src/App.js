import './App.css';
import Section1 from './components/section1';
import Header from './components/section_1/header';
import Section2 from './components/section2';
import Section3 from './components/section3';
import Section4 from './components/section4';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      
    </div>
  );
}

export default App;
