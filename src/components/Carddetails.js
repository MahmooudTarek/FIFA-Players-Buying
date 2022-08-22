import React, { useCallback, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../App.css";
import data from "./data";
import PlayerPurchase from "./PlayerPurchase";
let staticSrc = "/images/";
function CardDetails(player) {
  // console.log(player)
  let btnName;
  var buttons = document.getElementsByClassName(".btn");
  let [carddetails, setcarddetails] = useState(player);
  // console.log(carddetails);
  // console.log(staticSrc + player.player.image);
  useEffect(() => {}, []);
  if (player.player.items === 0) {
    btnName = "SOLD-OUT";
    setcarddetails = false;
  } else {
    btnName = "Purchase";
  }

  // const history = useHistory()
  // function GetCardDetails(){
  //   // console.log(player.player)
  //   // history.push(`/PlayerPurchase/${player.player.id}`)

  // }
  return (
    <div className="card m-1 bg-dark text-center align-content-center   ">
      {player.player.items === 0 && (
        <div className=" sold text-light ">SoldOut</div>
      )}
      <img
        src={staticSrc + player.player.image}
        className="card-img-top"
        alt="..."
      />

      <div className="card-body text-center text-capitalize ">
        <h4 className="card-title text-primary text-capitalize text-center text-light text-opacity-75 font-italic ">
          {player.player.name}
        </h4>
        <div className="cardfav  row d-flex d-inline justify-content-center align-content-center mt-2 text-center  ">
          <h5 className="card-text text-warning m-auto d-flex justify-content-center align-content-center">
            {player.player.team}
          </h5>
          <h5 className="card-text text-warning m-auto d-flex justify-content-center align-content-center">
            {player.player.position}
          </h5>
          <h5 className="card-text text-warning m-auto d-flex justify-content-center align-content-center">
            {player.player.rate}
          </h5>
          <h5 className="card-text text-warning m-auto d-flex justify-content-center align-content-center">
            {player.player.price}
          </h5>
          <h5>
            {
              // player.player.items
              setcarddetails ? (
                <Link
                  className="btn text-primary"
                  to={`/PlayerPurchase/${player.player.id}`}
                >
                  {btnName}
                </Link>
              ) : (
                <p className="text-danger bg bg-black w-100">{btnName}</p>
              )
            }
          </h5>
          <div></div>
        </div>
      </div>
    </div>
  );
}
export default CardDetails;
