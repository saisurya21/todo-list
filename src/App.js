import React from 'react';
import Welcome from './components/Welcome'
import{Data}  from './Data'
import Map from "./components/Map"

function ncard(value){
  return(
    
   
    <Map 
    imgscr={value.img}
      a={value.a}
      name={value.name}
    
    />
  );
}
function App() {
  return (
    <>
    <nav className="navBar">Top movies  
    <input type="" className="search"></input>
    
    </nav>
    <div className="con1">
       
    {/* {Data.map( (value)=>{
      // console.log(value);
      <Welcome 
      imgscr={value.img}
      a={value.a}
      name={value.name}


      />
    
    })} */}
  
      
      {Data.map(ncard)
        
     
      
      
      }
    </div>
    </>
  );
}

export default App
