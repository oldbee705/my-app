import { useEffect, useState } from 'react';
import React from 'react'

export default function(){
  const [time, setTime] = useState(() => new Date)//将state初始值设置成当前时间
  useEffect(() => {
    const id = setInterval(() => {
      // 每隔1秒 time 重新计算
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  });
  let timeStr= time.toLocaleTimeString();// 转化为时间字符串
  return(
    <h1>It is {timeStr}.</h1>
  )
}