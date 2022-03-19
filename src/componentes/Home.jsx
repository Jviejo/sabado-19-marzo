import React from 'react'
import {Link, Outlet} from 'react-router-dom'

export default function Home() {
    return (
        <div className="d-flex flex-column container fullscreen ">
            <header>
                <ul>
                    <li><Link to="/clientes">Clientes</Link></li>
                    <li><Link to="/productos">Productos</Link></li>
                    <li><Link to="/facturas">Facturas</Link></li>
                </ul>
            </header>
            <main className="flex-grow-1">
                <Outlet />
            </main>
            <footer>pie</footer>
        </div>
    )
}
