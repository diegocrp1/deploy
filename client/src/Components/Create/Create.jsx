import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Boxes from "../Boxes/Boxes";
import { addCharacter, addType, resetErrorMessageCharacter, resetTypeData, setErrorMessageCharacter } from "../../Redux/Actions";
import { validate,validateTypes } from "../../utils/validaciones/validate";
import style from './Create.module.css'

export default function Create() {
  const {tipos}=useSelector(state=>state)
  const { errorMessageCharacter } = useSelector(state => state);
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const dispatch=useDispatch()
  
  useEffect(()=>{
    dispatch(addType())
    return ()=>{
      dispatch(resetTypeData())
    }

  },[dispatch])

  const [pokemon,setPokemon]=useState({
    name:'',
    image:'',
    life:0,
    attack:0,
    defense:0,
  })

  const [errors, setErrors]=useState({
    name:'',
    image:'',
    life:'',
    attack:'',
    defense:'',
  })


  const [types, setTypes] = useState([]);
  const [typesErrors,setTypesErrors]=useState({
    error1:"",
    error2:""
  })

  const handleChange=(event)=>{
    const {value,name}=event.target
    setPokemon({
      ...pokemon,
      [name]:value
    })
    setErrors(validate({
      ...pokemon,
      [name]:value
    }))
  }
  const handleChangeTypes = (value) => {
    setTypes((selectedTypes) => {
      if (selectedTypes.includes(value)) {
        return selectedTypes.filter((type) => type !== value);
      } else {
        return [...selectedTypes, value];
      }
    });
  };

  

  useEffect(() => {
    // setErrors(validate(pokemon))
    dispatch(resetErrorMessageCharacter())
    setTypesErrors(validateTypes(types));
  }, [types, dispatch]);


  const handleSubmit=(event)=>{
    event.preventDefault()
    const characterData={
      ...pokemon,
      types:types
      
    }
    setSubmitting(true)
    try {
      dispatch(addCharacter(characterData))
      setSuccessMessage("Character created successfully!");
    } catch (error) {
      dispatch(setErrorMessageCharacter(error.message))
      setSubmitting(false)
    }
  }

  // const hasErrors = Object.values(errors).some((error) => error !== "") 
  // Object.values(typesErrors).some((error) => error !== "");

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.containerInputs}>
        <label htmlFor="name" className={style.label}>Name</label>
        <input type="text" name="name" value={pokemon.name} onChange={handleChange} className={style.input}/>
        {errors.name?<p className={style.inputErrors}>{errors.name}</p>:null}
        

        <label htmlFor="image" className={style.label}>Image</label>
        <input type="text" name="image" value={pokemon.image} onChange={handleChange} className={style.input}/>
        {errors.image?<p className={style.inputErrors}>{errors.image}</p>:null}
        

        <label htmlFor="life" className={style.label}>Life</label>
        <input type="number" name="life" value={pokemon.life} onChange={handleChange} className={style.input}/>
       {errors.life?<p className={style.inputErrors}>{errors.life}</p>:null}
        

        <label htmlFor="attack" className={style.label}>Attack </label>
        <input type="number" name="attack" value={pokemon.attack} onChange={handleChange} className={style.input}/>
        {errors.attack?<p className={style.inputErrors}>{errors.attack}</p>:null}
       

        <label htmlFor="defense" className={style.label}>Defense</label>
        <input type="number" name="defense" value={pokemon.defense} onChange={handleChange} className={style.input}/>
      
        {errors.defense?<p className={style.inputErrors}>{errors.defense}</p>:null}
        
        </div>
        {/* {typesErrors.error1?<span>{typesErrors.error1}</span>:null} */}
        <div className={style.boxes}>
        <Boxes tipos={tipos}  handleChangeTypes={handleChangeTypes} selectedTypes={types}/>
        </div>

        {/* {(errors.name||errors.image||errors.life||errors.defense||errors.attack)?null:<button type="submit">Create</button>} */}
        <button type="submit" className={style.button}>Create</button>
        {submitting && !errorMessageCharacter && (
        <span className={style.successMessage}>{successMessage}</span>
      )}
        {errorMessageCharacter ? <span className={style.errorMessage}>{errorMessageCharacter}</span> : null}
        {typesErrors.error2?<span className={style.typesErrors}>{typesErrors.error2}</span>:null}
        {/* {!hasErrors && <button type="submit">Create</button>} */}

      </form>
    </div>
  );
}
