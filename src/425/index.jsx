// import  {Moment} from 'moment';
import React from 'react';

export default function hello(){
  let d = new Date(); // 获取系统当前时间
  let hour= d.getHours();// 得到小时数
  console.log(hour)
  if(hour >= 6 && hour < 11){
    return(
      <h1>早上好!</h1>
    )
  }else if(hour >= 11 && hour < 13){
    return(
      <h1>中午好!</h1>
    )
  }else if(hour >= 13 && hour < 18){
    return(
      <h1>下午好!</h1>
    )
  }else{
    return(
      <h1>晚上好!</h1>
    )
  }
}
