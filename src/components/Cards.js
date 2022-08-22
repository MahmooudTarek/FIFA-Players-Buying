import React, { useState } from "react";
import data from "./data";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";
import CardDetails from "./Carddetails";
import PlayerPurchase from "./PlayerPurchase";
import Naavbar from "./navbar"
let staticSrc = "./images/";

// console.log(data);
function Cards() {
  // const [palyers, setPlayers] = useState([]);

  //  const history = useHistory()
  //  function HandleSubmit(e){
  //     // e.preventDefault()
  //     history.push(`/Purchase`)
  //  }

  return (
    <>
          <Naavbar />

      <div className="row row-cols-1 row-cols-md-3 g-0 ">
        {data.map((player) => {
          return (
            <div className="col" key={player.id}>
              <div className="m-4">
                <PlayerPurchase player={player.name}/>
                <CardDetails player={player} />

              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
// return(

// )

export default Cards;
