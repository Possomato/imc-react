import React from 'react'
import './App.css'
import { Button } from './components/Button'

export function App(){
  return(
    <div className="Container">
      <h1>Cálculo de IMC</h1>
      <Button title='Calcular IMC'/>
    </div>
  )
}
