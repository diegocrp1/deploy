import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacterName, resetErrorMessage, setErrorMessage } from '../../Redux/Actions';
import { useLocation } from 'react-router-dom';
import style from "./SearchBar.module.css"
import charizar from '../../utils/charizar.gif'


export default function SearchBar() {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false); // Nuevo estado para el indicador de carga
  const dispatch = useDispatch();
  const { errorMessage } = useSelector(state => state);
  const location = useLocation();

  function handleChange(event) {
    setName(event.target.value);
  }

  async function handleButton() {
    if (name.trim() !== '') {
      setLoading(true); // Establecer el estado de carga a true antes de la acción

      try {
        dispatch(resetErrorMessage());
        await dispatch(getCharacterName(name));
        setName('');
      } catch (error) {
        dispatch(setErrorMessage(error.message));
      }

      setLoading(false); // Establecer el estado de carga a false después de la acción
    }
  }

  return (
    <div className={style.pokemonInputBox}>
      <div className={style.containerBotton}>
      <div>
      {errorMessage ? <span className={style.pokemonError}>{errorMessage}</span> : null}
      </div>
      <div>
      {location.pathname !== '/create' && <input type="search" onChange={handleChange} value={name} className={style.pokemonInput}/>}
      </div>
      </div>
      {name ? <button onClick={handleButton} className={style.pokemonButton}>Search</button>: null}

      {loading ?
      <div className={style.containerLoading}>
      <img src={charizar} alt="Not Found" className={style.containerImg} />
      <span className={style.containerText}>Loading...</span> 
      </div> 
      : null}
    </div>
  );
}