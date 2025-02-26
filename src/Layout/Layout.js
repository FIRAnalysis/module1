import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div>
      <Header/>
      <main style={{minHeight:"72vh", width:"100vw"}}>
      {children}
      </main>
      
      <Footer/>
    </div>
  )
}

export default Layout
