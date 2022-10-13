import React from 'react'
import "./Map.css"
function Map(props) {
    // const name=['sai','surya','vani'];
    // const listelements= name.map(names => <h2>{names}</h2>)
    return (
        
        <div className="con">
            
             <React.Fragment>
            <div className="contaner">
                 <div className="cards">
                     <div className="card">
                         <a href={props.a} className="card_movie">
                             <img src={props.imgscr} alt="movie img" />
                             <h3><span>{props.name}</span></h3>

                             <button>Watch Now</button>

                         </a>


                     </div>
                 </div>
             </div>
         </React.Fragment>
        </div>
    )
}

export default Map
