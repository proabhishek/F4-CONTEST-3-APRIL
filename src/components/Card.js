import { useDispatch,useSelector } from "react-redux";
import { addDataToMycart } from "../redux/action";
import { useState } from "react";
export const Card = ({id, title,price,image,rating,handleClick,message}) => {

  // let[cartDataIs,setCartDataIs]=useState()
  // const d=useSelector((state)=>state.data.cardData)
  // setCartDataIs(d);
  
  // const data  = useSelector((state) =>state.data.data.products)
  // const mycartData=useSelector((state)=>state.data.cardData);
  // console.log("in card.js",mycartData)
  // // console.log("data",d)

  // const  dispatch=useDispatch()

  // const handleClick = event => {
  //   let idNo=event.currentTarget.id;
   
  //   let reqData=data.find((value)=>idNo==value.id)
  //   console.log(reqData)
  //   let flag=true;
  //   let resutant=mycartData.find((value)=>value.id==reqData.id)
  //   console.log("resutant",resutant)
  //   if(resutant==null)
  //   dispatch(addDataToMycart(reqData))
  //   // console.log(data)
  // };
    return (
        <div class="col-lg-3">

            
            {
                <div class="card" style={{width:"18rem", height:"450px" ,border:"1px solid black"}}>
                <img className="image" src={image}></img>
                <div class="card-body">
                <h4 class="card-title">id: {id}</h4>
                  <h4 class="card-title">title: {title}</h4>
                  <p class="card-text">price: {price}</p>
                  <h4 class="card-title">rating: {rating}</h4>
                
                  <a id={id} href="#" class="btn btn-primary" onClick={handleClick}>{message}</a>
                </div>
              </div>
            }
        </div>

    )
}