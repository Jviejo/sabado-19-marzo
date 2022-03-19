import React from 'react'
import {Link} from 'react-router-dom'
function Header() {
    return (
        <header>
            <ul className='list-group list-group-horizontal'>
                <li className="list-group-item"><Link to="/clientes">Clientes</Link></li>
                <li className="list-group-item"><Link to="/productos">Productos</Link></li>
                <li className="list-group-item"><Link to="/facturas">Facturas</Link></li>
                <li className="list-group-item"><Link to="/eth">Eth</Link></li>
            </ul>
        </header>
    )
}

export default Header