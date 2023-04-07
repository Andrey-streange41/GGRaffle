import React from 'react';
import './ProgressBar.scss';

interface IProps{
  color?:string
  background?:string
  amount:number
  value:number
}

export const ProgressBar = ({ color : selectedColor, background, value, amount }:IProps) => {
  const percentage = (value / amount) * 100;
  
 
  return (
    <div className='parrent-bar'>
       <div style={{background, width: `${percentage}%`}} className='progress'>
       </div> 
       <div className='label'>
          <span style={{color:percentage>60 && selectedColor==="white"?selectedColor:"black"}}>left {value} / {amount}</span>
       </div>
     
    </div>
  )
}

