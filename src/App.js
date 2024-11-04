import React from "react";
import Home from './components/Home'; 
import Partners from './components/Partners'; 
import Team from './components/Team';   
import 'bootstrap/dist/css/bootstrap.min.css';    
import './styles/index.css' 

const App = () => {
  return (
    <div>
      <Home />
      {/* <Partners />
      <Team /> */}
    </div>
  );
};

export default App;