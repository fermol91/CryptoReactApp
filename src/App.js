import "./App.css";
//import CoinApp from "./components/CardComponents/CoinApp";
import Header from "./components/Header/Header";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./Views/Home/Home";
import About from "./Views/About/About";
import Contact from "./Views/Contact/Contact";


const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          
        </Routes>

      </div>

    </Router>
    
      
        
      

            
  
        
  );
}

export default App;