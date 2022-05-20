import React, { useState } from 'react'
import { Input,Alert } from 'antd';
import './a.css'

export default function(){
  const toCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9
  const toFahrenheit = (celsius) => (celsius * 9) / 5 + 32
  const [celsius,setcelsius] = useState('')
  const [fahrenheit,setfahrenheit] = useState('')
  const handleOnChange = (e, type) =>{
    if(type === 'C'){
      setcelsius(e.target.value)
      setfahrenheit(toFahrenheit(e.target.value))
    }else{
      setfahrenheit(e.target.value)
      setcelsius(toCelsius(e.target.value))
    }
  }

  function isBoil(){
    if(celsius > 100){
      return(
        <Alert message="The water would boil." type="warning" />
      )
    }
  }
  return(
    <>
      <h1>Enter temperature in Celsius:</h1>
      <Input 
        placeholder="" 
        id="celsius" 
        onChange={(e) => {handleOnChange(e, 'C')}} 
        value={Math.round(celsius*100)/100} 
      />
      <h1>Enter temperature in Fahrenheit:</h1>
      <Input 
        placeholder="" 
        id="fahrenheit" 
        onChange={(event) => {handleOnChange(event, 'F')}} 
        value={Math.round(fahrenheit*100)/100}
      />
      {isBoil()}
    </>
  )
}