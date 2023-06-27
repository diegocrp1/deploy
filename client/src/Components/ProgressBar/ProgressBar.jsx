import React, { useEffect, useState } from 'react'
import style from './ProgressBar.module.css'

export default function ProgressBar({characterDetail,value}) {
    const [progressValue, setProgressValue] = useState(0);
    useEffect(() => {
      if (value) {
        const targetValue = value;
        const timer = setInterval(() => {
          setProgressValue((prevValue) => {
            if (prevValue < targetValue) {
              return prevValue + 1;
            } else {
              clearInterval(timer);
              return prevValue;
            }
          });
        }, 30);
  
        return () => {
          clearInterval(timer); // Limpiar el intervalo al desmontar el componente
        };
      }
    }, [characterDetail, value]);
      // console.log(value)
  return (
    <div className={style.containerProgress}>
        <div className={style.progressBar} style={{ width: `${progressValue}%` }}>{progressValue}</div>
      </div>
  )
}
