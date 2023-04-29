import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Navbar} from "./components/Navbar"
import { fetchData } from './redux/action';
import './App.css';
import { Main } from './components/Main';
import { MyCart } from './components/MyCart';
import {Routes, Route} from "react-router-dom";

// dispatch  => useDispacth

// store => get data from store => getState => useSelector 

let post_style = {
    border: "1px solid black",
    margin: "10px",
    padding: "10px",
    bacground: "lightgray"
}


const App = () => {
     const loading  = useSelector((state) =>state.data.loading)
     const data  = useSelector((state) =>state.data.data)
     const error = useSelector((state) =>state.data.error)
    const cartData=useSelector((state)=>state.data.cardData)

     console.log(loading)
     console.log(data)
     console.log(error)
     console.log('cart daa',cartData)
      const dispatch = useDispatch()
    
     useEffect(() =>{
          dispatch(fetchData())
     }, [dispatch]
     )
    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>Error: {error}</h1>
    }

    return(
      <div>
          <Navbar/>
           {/* <Main/>
           <MyCart/> */}
           <Routes>
                <Route path="F4-CONTEST-3-APRIL/" element={<Main/>} />
                <Route path="/about" element={<MyCart />} />
            </Routes>
      </div>
    )
}

export default App




