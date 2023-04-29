import { FETCH_DATA_REQUEST,FETCH_DATA_SUCCESS,FETCH_DATA_FAILURE,REMOVE_DATA_FROM_MYCART,ADD_DATA_TO_MYCART} from "./actionTypes"
import axios from "axios";
import product from "../apis/product";
// let initialState = {
//     loading: true,
//     data: [],
//     error: ""
// }

export const fetchDataRequest = () => ({
    type: FETCH_DATA_REQUEST
})

export const fetchDataSuccess = (data) => ({
    type: FETCH_DATA_SUCCESS,
    payload: data
})

export const fetchDataFailure = (error) => ({
    type: FETCH_DATA_FAILURE,
    payload: error
})

export const removeDataFromMycart=(data)=>({

    
    type:REMOVE_DATA_FROM_MYCART,
    payload:data
    
})

// export const addDataToMycart=(data)=>(
//     {
//     type:ADD_DATA_TO_MYCART,
//     payload:data
// })

export function addDataToMycart(data)
{
    console.log("in add data to my cart",data)
    return{
        type:ADD_DATA_TO_MYCART,
        payload:data
    }
}

export const fetchData = () => async (dispatch) => {
    dispatch(fetchDataRequest)
    try{
        const reponse = await axios.get(" https://dummyjson.com/products")
        dispatch(fetchDataSuccess(reponse.data))
    }
    catch(error){
        dispatch(fetchDataFailure(error.message))

        // error.name 
        // error.message
    }
}
// 1: 