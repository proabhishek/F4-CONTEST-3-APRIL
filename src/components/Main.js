import {Card} from "./Card"
import product from "../apis/product"
import { useEffect, useState } from "react"
import {useSelector, useDispatch} from 'react-redux';
import { addDataToMycart } from "../redux/action";
import axios from "axios"
export const Main = () => {
    const data1  = useSelector((state) =>state.data.data.products)
    console.log(data1)

    
        const data  = useSelector((state) =>state.data.data.products)
  const mycartData=useSelector((state)=>state.data.cardData);
  console.log("in card.js",mycartData)
  // console.log("data",d)

  const  dispatch=useDispatch()

  const handleClick = event => {
    console.log("djdjd")
    let idNo=event.currentTarget.id;
   
    let reqData=data.find((value)=>idNo==value.id)
    console.log(reqData)
    let flag=true;
    let resutant=mycartData.find((value)=>value.id==reqData.id)
    console.log("resutant",resutant)
    if(resutant==null)
    dispatch(addDataToMycart(reqData))
    // console.log(data)
  };
    

    return (
        <div className="main-page">
            <div class="container-fluid px-0 top-banner">
                <div class="container">
                    <h1 style={{textAlign:"center"}}>All Items</h1>
                    <div class="grid-container">
                        {
                            data1&&
                            data1.map((value)=>(
                               <div>
                                         <Card id={value.id} title={value.title} price={value.price} image={value.images[0]} rating={value.rating} handleClick={handleClick} message={'Add To Cart'}/>
                                       
                               </div>
                            ))
                        }1
                    </div>
                </div>
            </div>
        </div>
    )
}

