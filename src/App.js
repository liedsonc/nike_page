import React from 'react';
import style from './App.css';
import Navbar from './Components/Navbar/Navbar';
import Front from './Front_page'
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      
      <Navbar/>
      
      <Front />
      
      <Footer className="Footer" />
    </div>
  );
}

export default App;
