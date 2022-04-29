import {useState} from 'react';
import React from 'react'
import './a.css';

export default function(){
  const [state, setState] = useState(true)
  return(
    <div>
      <h1 className='Cm'>Click me</h1>
      <button 
        className='B' 
        onClick = {() => state ? setState(false) : setState(true)}>
        {state ? 'ON' : 'OFF'}
      </button>
    </div>
  )
}
