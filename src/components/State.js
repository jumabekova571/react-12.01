import React, { useState } from "react";
 

  const clickButton1 = () => {
    let result = count;
    setCount(++result);
   } 

   const clickButton2 = () => {
    let result = count;
    setCount(--result);
   } 
 return (
  <div>
    <button onClick={clickButton1}>Увеличить</button>
    <button onClick={clickButton2}>Уменьшить</button>
  </div>
 )

 export default State