import React from 'react'
import { NavLink } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import style from "../NavBar/NavBar.module.css";

export default function Navbar({handleLogout}) {
  return (
    <div className={style.container}>
      <NavLink to={`/home`} className={style.navlink}>Home</NavLink>
      <NavLink to={`/create` } className={style.navlink}>Create</NavLink>
      {/* <NavLink to={`/About`}>About</NavLink> */}
      <button onClick={handleLogout} className={style.button}>Logout</button>
      <SearchBar/>
    </div>
  )
}
