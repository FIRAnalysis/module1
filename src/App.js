import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Rout from './rout'
import 'bootstrap/dist/css/bootstrap.min.css'


const App = () => {
  return (
    <div>
      <BrowserRouter>
     
      <Rout/>
      
      </BrowserRouter>
    </div>
  )
}

export default App
