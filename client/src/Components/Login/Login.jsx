import React from 'react'
import miImagen from '../../utils/Logo-Pokemon.png'
import imagen from '../../utils/Imagen1.png'
import style from './Login.module.css'

export default function Login({handlelogin}) {
  return (
    <div className={style.container}>
        <img src={miImagen} alt="Not found" className={style.img} />
        <div className={style.buttonContainer}>
        <button onClick={handlelogin}className={style.button}>Home</button>
        </div>
        <img src={imagen} className={style.imgDos} alt="" />
    </div>
  )
}
