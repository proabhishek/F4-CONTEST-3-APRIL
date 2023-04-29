import { useEffect } from "react"
import {useSelector, useDispatch} from 'react-redux';
import { Card } from "./Card"
import { removeDataFromMycart } from "../redux/action";




export const MyCart = () => {
    const  dispatch=useDispatch()
    const mycartData=useSelector((state)=>state.data.cardData);
    const handleClick = event => {
        let idNo=event.currentTarget.id;
        let reqData=data.find((value)=>idNo==value.id)
        dispatch(removeDataFromMycart(reqData))
        console.log(mycartData)
    }

    const data = useSelector((state) => state.data.cardData)
    // useEffect(()=>{
    //     console.log("mycart data",data)
    // },[data])
    console.log(data)

    return (
        <div>
            <div class="container-fluid">
                <div class="container">
                <h1 style={{textAlign:"center"}}>My Cart</h1>
                    <div class="row">
                        <div class="col-lg-9 col-md-10">
                            <div className="grid-container-mycart">
                                {data &&
                                    data.map((value) => (
                                        <div>
                                            <Card id={value.id} title={value.title} price={value.price} image={value.images[0]} rating={value.rating} handleClick={handleClick} message={'Remove from cart'}/>

                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div class="col-1" >
                            <div className="right-div"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}