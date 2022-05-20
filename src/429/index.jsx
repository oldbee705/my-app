import React,{useState} from 'react';
import {Button,message} from 'antd';
import './a.css';

export default function(){
  const [state, setState] = useState(true)
  const info = () => {
    message.info("123abc");
  };
  return(
    <div>
      <h1 className='Cm' onClick={info}>Click me</h1> 
      <Button type="primary" className='B' 
        onClick = {() => state ? setState(false) : setState(true)}>
        {state ? 'ON' : 'OFF'}
      </Button>
    </div>
  )
}