import React from 'react'
import { useDispatch } from 'react-redux'
import { numPage } from '../../Redux/Actions'
import style from './Paginate.module.css'

export default function Paginate({cantPages}) {
    const dispatch=useDispatch()

    const handlePage=(number)=>{
        dispatch(numPage(number))
    }

  return (
    <div className={style.container}>
        {cantPages?.map((e,i)=><button className={style.buttonPaginate} onClick={()=>handlePage(i+1)} key={i+1}>{i+1}</button>)}
    </div>
  )
}
