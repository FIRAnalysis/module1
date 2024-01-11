import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Register from './Register'
import Login from './Login'

const rout = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </div>
  )
}

export default rout
