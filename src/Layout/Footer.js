import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <h4 className='text-center'>All Rights Reserved &copy; Tech Innova Club</h4>
      <p className='text-center mt-3'>
      <Link to="/about">About Us</Link>
      |
      <Link to="/contact">Contact Us</Link>
     
      
</p>
      
    </div>
  )
}

export default Footer
