import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as counterAction from "../redux/action/count";
const Count = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  const count1 = useSelector((state) => state.counter.count1);

  const handleInc = () => {
    dispatch(counterAction.increment());
  };

  const handleDec = () => {
        dispatch(counterAction.decrement());
  };

  const handleMul = () => {
    dispatch(counterAction.multiply());
  }

  const handleDivide = () => {
    dispatch(counterAction.divide());
  }

  return (
  <div className="mt-5">
    <div className="mt-5">
      <h1>{count}</h1>
      <button onClick={handleInc}>increment</button>
      <button onClick={handleDec}>decrement</button>
    </div>
    <br></br>
    <br></br>
    <div className="mt-5">
      <h1>{count1}</h1>
      <button onClick={handleMul}>Multiply</button>
      <button onClick={handleDivide}>Divide</button>
    </div>

  </div> 
  );
};

export default Count;
