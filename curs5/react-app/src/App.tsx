//import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Masina from './components/Masina'
import Salut from './components/Salut'



function App() {
  const carInfo = {name: "Ford", model: "Mustand"}
  return (
    <>
     <Salut nume='Marian' curs='React' varsta={19}/>
     <Salut nume='Ion' varsta={29}/>
     <Salut nume='Dan' varsta={39}/>
     <Masina cars = {carInfo}/>
     <Form/>
    </>
  )
}

export default App
