import React from 'react'
import "./App.css";
import {Increament,Decreament} from "./action/action"
import {useSelector,useDispatch} from "react-redux"

const App = () => {

  const myState = useSelector((state) => state.reducerFun);
  const dispatch = useDispatch();
  return (
    <div className='mainclass'>
      <h1>Increament and Decreament</h1>
      <div className='workfield'>
        <button onClick={() => dispatch(Decreament())}>-</button>
        <input type="text" value={myState}/>
        <button onClick={() => dispatch(Increament())}>+</button>
      </div>
    </div>
  )
}

export default App