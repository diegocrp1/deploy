import React from 'react'
import style from './Boxes.module.css'

export default function Boxes({tipos,handleChangeTypes,selectedTypes}) {

    const handleChange=(event)=>{
      const {value}=event.target
      handleChangeTypes(value)
    }
  return (
    <>
        {tipos.map((tip)=>(
            <div className={style.container}  key={tip.id}>
            <label htmlFor="id" ><span className={style.label}>{tip.name}</span> </label>
              <input
            type="checkbox"
            name='id'
            value={tip.id}
            checked={selectedTypes.includes(tip.id)}
            onChange={handleChange}
            className={style.checkbox}
            />
            </div>
        )
        )
        }
    </>
  )
}
