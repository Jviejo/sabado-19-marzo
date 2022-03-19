import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <footer className='d-flex justify-content-around mb-5'>
      <div className='d-flex flex-column'>
        <Link to="/personas">Facebook</Link>
        <Link to="/personas">Instragram</Link>
        <Link to="/personas">Linked</Link>
      </div>
      <div className='d-flex flex-column'>
        <Link to="/personas">Contactar</Link>
        <Link to="/personas">Terminos y condiciones</Link>
        <Link to="/personas">Seguridad</Link>
      </div>
    </footer>
  )
}

export default Footer