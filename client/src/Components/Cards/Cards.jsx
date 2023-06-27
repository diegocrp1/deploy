import React, { useEffect, useState } from 'react'
import Card from '../Card/Card';
import {  useDispatch, useSelector } from "react-redux";
import { filterCards, filterOrder, filterOrderAttack, getCharacter, resetAddCharacter, resetCharacter,  } from '../../Redux/Actions';
import Paginate from '../Paginate/Paginate';
import style from "./Cards.module.css"
import charizar from "../../utils/charizar.gif"

export default function Cards() {
  const {characters}=useSelector(state=>state)
  const {numPage}=useSelector(state=>state)
  const dispatch=useDispatch()
  const [loading,setLoading]=useState(false)

  
    useEffect(()=>{
      let mounted=true
    const fetchData=async()=>{
      setLoading(true)
      await dispatch(getCharacter())
      if(mounted){
        setLoading(false)
      }
    }
    fetchData()
    return ()=>{
      mounted=false
      dispatch(resetAddCharacter())
    }
},[dispatch])
  // console.log(characters)
  
  const handleReset=()=>{
    dispatch(resetCharacter())
  }
  
  const handleFilter=(event)=>{
    dispatch(filterCards(event.target.value))
  }

  const handleOrder=(event)=>{
    dispatch(filterOrder(event.target.value))
  }
  const handleOrderAttack=(event)=>{
    dispatch(filterOrderAttack(event.target.value)) 
   }

   let desde=(numPage-1)*12
   let hasta=numPage*12
   let cantPages=characters.length/12
   const viewCharacters=characters.slice(desde,hasta)
   if(loading){
    return <div className={style.containerLoading}>
      <img src={charizar} alt="Not Found" className={style.containerImg} />
      <span className={style.containerText}>Loading...</span> 
      </div>
  }

  return (
    <>
    <div>
      <div className={style.containerReset}>
       <button onClick={handleReset} className={style.buttonReset}><img src="https://i0.wp.com/lordlibidan.com/wp-content/uploads/2019/03/Running-Pikachu-GIF.gif?resize=480%2C342&ssl=1" className={style.imgReset} alt="Not found" /><span className={style.textContainerReset}>Reload all</span></button>
      </div>
      <div className={style.containerSelect}>
      <select onChange={handleOrderAttack} className={style.selectOne}>
      <option className={style.selectOption}>Select</option>
      <option value="AscendenteAttack" className={style.selectOption}>AscendenteAttack</option>
      <option value="DescendenteAttack" className={style.selectOption}>DescendenteAttack</option>
    </select>
    <select onChange={handleOrder} className={style.selectOne}>
      <option className={style.selectOption}>Select</option>
      <option value="Ascendente" className={style.selectOption}>Ascendente</option>
      <option value="Descendente" className={style.selectOption}>Descendete</option>
    </select>
      <select onChange={handleFilter} className={style.selectOne}>
        <option className={style.selectOption}>Select</option>
        <option value="normal" className={style.selectOption}>Normal</option>
        <option value="fighting" className={style.selectOption}>Fighting</option>
        <option value="flying" className={style.selectOption}>Flying</option>
        <option value="poison" className={style.selectOption}>Poison</option>
        <option value="ground" className={style.selectOption}>Ground</option>
        <option value="rock" className={style.selectOption}>Rock</option>
        <option value="bug" className={style.selectOption}>Bug</option>
        <option value="ghost" className={style.selectOption}>Ghost</option>
        <option value="steel" className={style.selectOption}>Steel</option>
        <option value="fire" className={style.selectOption}>Fire</option>
        <option value="water" className={style.selectOption}>Water</option>
        <option value="grass" className={style.selectOption}>Grass</option>
        <option value="electric" className={style.selectOption}>Electric</option>
        <option value="psychic" className={style.selectOption}>Psychic</option>
        <option value="ice" className={style.selectOption}>Ice</option>
        <option value="dragon" className={style.selectOption}>Dragon</option>
        <option value="dark" className={style.selectOption}>Dark</option>
        <option value="fairy" className={style.selectOption}>Fairy</option>
        <option value="unknown" className={style.selectOption}>Unknown</option>
        <option value="shadow" className={style.selectOption}>Shadow</option>
      </select>
      </div>
    <div className={style.containerCards}> 
        {
            viewCharacters?.map(char=><Card
            key={char.id}
            id={char.id}
            name={char.name}
            image={char.image}
            life={char.life}
            attack={char.attack}
            defense={char.defense}
            idUser={char.idUser}
            Types={char.Types}
            />)
        }
    </div>
    </div>
    <Paginate cantPages={characters.slice(0,cantPages)}/>
    </>
  )
}
