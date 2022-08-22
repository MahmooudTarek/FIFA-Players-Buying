import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import data from './data';
import "../App.css"
import axios from "axios"
let staticSrc="/images/";
function PlayerPurchase(player){
   // console.log(player)
   let params = useParams()
   // console.log(params)
let [Purchasedata ,setPurchasedata]=useState({})
   // id:x.match.params.i)
useEffect(()=>{

})

 return(

    <div >
    {/* <div className='text-danger'> name: {playerpurchase.name}</div>
        <div>{playerpurchase.id}</div> */}
        {/* <h1>{player.player.name}</h1> */}
     {   data.map(element=>{
  if( element.id==params.id){
   return(
    
  <div className="card purchase-bg text-center d-flex justify-content-center align-items-center" key={element.id } >
   <img
        src={staticSrc+element.image}
        className=" purchasephoto card-img-top"
        alt="..."
      />
    <div className="card-body" >
      <h1 className="card-title">{element.name}</h1>
      <p className="card-text">{element.price}</p>
      <Link to="/" className="btn btn-primary">PAY VISA</Link>
    </div>
  </div>
    
   
   
   
   
   )
}
})}
   
   </div>
     ) 

}
export default PlayerPurchase