
import { FETCH_DATA_REQUEST,FETCH_DATA_SUCCESS,FETCH_DATA_FAILURE,REMOVE_DATA_FROM_MYCART,ADD_DATA_TO_MYCART} from "./actionTypes"

import { combineReducers } from "redux";

const initialState = {
    loading: true,
    data: [],
    error: "",
    cardData:[]
}

const dataReducer = (state = initialState, action) => {
    // if(action.type===ADD_DATA_TO_MYCART)
    //   console.log("type ss",action.type)
    // console.log("in data reducer",action.payload)
    switch(action.type){
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            }
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case ADD_DATA_TO_MYCART:
            return{
                ...state,
                // cardData:state.cardData.push([action.payload])
                cardData:[...state.cardData,action.payload]
                // arr: [...state.arr, action.newItem]
                // arr: state.arr.push([action.newItem])


            }
        case REMOVE_DATA_FROM_MYCART:
            return{
                ...state,
                cardData:state.cardData.filter(item=>item!==action.payload)
                // items: state.items.filter(item => item !== action.payload),
            }
        default: 
            return state
        
        
    }
}

const rootReducer = combineReducers({
    data: dataReducer
})

export default rootReducer;