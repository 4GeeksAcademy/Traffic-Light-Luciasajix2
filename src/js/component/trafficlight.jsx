import React, {useState} from "react";
import "../../styles/trafficlight.css"

const TrafficLight = () => {
  const [color, setColor] = useState("red");
  const [redOn, setRedOn] = useState(false);
  const [yellowOn, setYellowOn] = useState(false);
  const [greenOn, setGreenOn] = useState(false);

  return (<>

      <div className="container">
        <div className= "row fila">
          <div className="col columna palo">
           
          </div>
        </div>
        <div className="row fila">
          <div className="col columna semaforo">
            <div className={!redOn ? "red" : "red on"} onClick={(e) => {setRedOn(!redOn);setYellowOn(false);setGreenOn(false);}}></div>
            <div className={!yellowOn ? "yellow" : "yellow on"} onClick={(e) => {setYellowOn(!yellowOn);setRedOn(false);setGreenOn(false);}}></div>
            <div className={!greenOn ? "green" : "green on"} onClick={(e) => {setGreenOn(!greenOn);setYellowOn(false);setRedOn(false); }} ></div>
          </div>
          
        </div>
        {redOn ? <h1>STOP!</h1> : <></>}
       </div>

      </>
      );
}
      export default TrafficLight