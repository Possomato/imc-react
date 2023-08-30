import React from 'react'
import './App.css'
import { Button } from './components/Button'
import { Input } from './components/Input'

export function App(){
  return(
    <div className="Container">
      <h1>Cálculo de IMC</h1>
      <Input label='Peso (kg)' placeholder='60'/>
      <Input label='Altura (cm)' placeholder='165'/>
      <Button title='Calcular IMC'/>
    </div>
  )
}
