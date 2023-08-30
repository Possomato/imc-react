import React from "react";
import './styles.css'

export function Input({label, placeholder}){
  return(
    <div className="container">
      <label htmlFor={label}>{label}</label>
      <input type="text" placeholder={placeholder} id={label}/>
    </div>
  )
}